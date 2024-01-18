import React, { useState } from "react";
import "./Grammar.css";
import {
  HomeFooter,
  DownloadBtn,
  showSub,
  Popup,
  Loading,
  Mouse,
} from "../../components";
import { API } from "../../api";
import axios from "axios";
import { useAuth } from "@clerk/clerk-react";
import { diff_match_patch } from "diff-match-patch";

const Grammar = (props) => {
  const { getToken } = useAuth();
  const [uploadedText, setUploadedText] = useState("");
  const [upload, setUpload] = useState(null);
  const [resultText, setResultText] = useState("");
  const [result, setResult] = useState(null);
  const [popUp, setPopup] = useState(false);
  const [popUpText, setPopupText] = useState("");
  const [getLoading, setLoading] = useState(false);
  const [fullScreenLoading, setFullScreenLoading] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: Adds smooth scrolling effect
    });
  };

  const highlightDifferences = () => {
    if (!uploadedText || !resultText) return;
    const dmp = new diff_match_patch();
    const diffs = dmp.diff_main(uploadedText, resultText);
    dmp.diff_cleanupSemantic(diffs);

    const highlightedText = diffs
      .map(([op, text]) => {
        const className = op === 1 ? "added" : op === -1 ? "removed" : "";
        return `<span class="${className}">${text}</span>`;
      })
      .join("");

    return { __html: highlightedText };
  };

  const clickDelete = (e) => {
    setUpload(null);
    setUploadedText("");
    setResult(null);
    setResultText("");
    setLoading(false);
    handleScrollToTop();
  };

  const clickUpload = async (event) => {
    setLoading(true);
    const file = event.target.files[0];
    event.target.value = ""; // Reset event target to enable same upload

    if (!file) {
      console.log("No file selected");
      return;
    }

    // Create FormData to upload file to back end server
    const fd = new FormData();
    fd.append("file", file);
    console.log(file);
    setUpload(file);

    // Change text to display uploaded text preview
    await axios
      .post(API.getFileContent(), fd)
      .then((res) => {
        setUploadedText(res.data.response);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const clickParaphrase = async (e) => {
    setFullScreenLoading(true);
    const token = await getToken();

    // Check word count
    if (props.sub.name === "Free") {
      const wordCount = uploadedText.split(/\s+/).length;
      if (wordCount > 5000) {
        setPopupText("Free user can only check file up to 5000 words.");
        setPopup(true);
        return;
      }
    }

    // Check weekly limit
    if (props.sub.name !== "Expert") {
      const history = await axios.get(API.history(), {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Count the number of documents uploaded this week
      let count = 0;
      for (let index in history.data) {
        const date = new Date(history.data[index].create_at);
        const thisWeek = new Date();
        const lastSunday = thisWeek.getDate() - thisWeek.getDay();
        thisWeek.setDate(lastSunday + 1);

        if (date >= thisWeek) {
          count++;
        }
      }

      // Compare with the limit for Free and Novice users
      if (props.sub.name === "Free" && count >= 30) {
        setPopupText("Free user can only check files up to 30 times per week.");
        setPopup(true);
      } else if (props.sub.name === "Novice" && count >= 100) {
        setPopupText(
          "Novice user can only check files up to 100 times per week."
        );
        setPopup(true);
      }
    }

    const fd = new FormData();
    fd.append("file", upload);

    // Get edited file ID
    const response = await axios
      .post(API.uploadFile(), fd, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((err) => {
        console.error(err);
      });
    // console.log(response.data);
    const fileId = response.data.edited_file_id;

    // Get text
    const text = await axios.get(API.getFileInfo(fileId)).catch((err) => {
      console.error(err);
    });
    setResultText(text.data.content);
    setFullScreenLoading(false);

    // Get file
    const file = await axios
      .get(API.getFile(fileId), { responseType: "blob" })
      .catch((err) => {
        console.error(err);
      });
    setResult(file.data);
  };

  const clickDownload = async (e) => {
    const fileName = upload.name.replace(".docx", "-fixed.docx");

    // Create download link for the file
    const url = URL.createObjectURL(result);
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    link.click();
  };

  const closePopup = () => {
    setPopup(false);
  };

  return (
    <div className="grammar">
      {fullScreenLoading ? <Loading fixed="true" /> : null}
      <div className="header">
        <h3>Grammar Checker</h3>
        {showSub(props.sub)}
      </div>

      <div className="content_wrapper">
        <div className="model">
          <h3 className="green_text">Models:</h3>
          <h3>LLM AI v1.1</h3>
        </div>
        <div className="content">
          <div className="content-left">
            <div className="relative-container">
              {/* <textarea
                name="text"
                placeholder={
                  !getLoading ? "Imported text will be displayed here" : null
                }
                value={uploadedText}
                disabled
              /> */}
              <div className="input_content" contentEditable={false}>
                {!uploadedText && !getLoading ? (
                  <div className="placeholder_result">
                    <h2>Please upload .docx file from the button below</h2>
                  </div>
                ) : (
                  <div>{uploadedText}</div>
                )}
              </div>
              {getLoading ? <Loading /> : null}
            </div>

            <div className="input-buttons">
              {upload ? (
                <button className="icon-button" onClick={clickDelete}>
                  <span className="material-symbols-rounded">delete</span>
                </button>
              ) : null}
              <input
                type="file"
                id="file"
                onChange={clickUpload}
                accept=".docx"
              ></input>
              <label htmlFor="file" className="icon-button">
                {upload ? null : <h5>Upload file &nbsp;</h5>}
                <span className="material-symbols-rounded">upload_file</span>
              </label>
              <button
                className={`filled-btn ${upload ? "orange" : "disable"}`}
                onClick={clickParaphrase}
              >
                Check
              </button>
            </div>
          </div>

          <div className="content-right">
            {/* <textarea
              name="text"
              placeholder="Corrected text will be shown here"
              value={resultText}
              disabled
            ></textarea> */}

            <div
              className="result_content"
              style={{ whiteSpace: "pre-wrap" }}
              dangerouslySetInnerHTML={highlightDifferences()}
            />

            {!resultText && (
              <div className="placeholder_result">
                <h2>Corrected text will be shown here</h2>
              </div>
            )}

            <DownloadBtn
              className="orange"
              onClick={clickDownload}
              isVisible={result !== null}
            />
          </div>
        </div>
      </div>

      <Mouse></Mouse>

      <div id="below" className="flex_common_vertical">
        <div className="max-width">
          <div className="grammar_intro">
            <h2 className="">
              Introducing <b>AI GRAMMAR CHECKER</b>
            </h2>
            <div>
              {" "}
              <h3 className="">
                A <b> {"smart"} </b> companion for flawless writing.
              </h3>
              <p>
                Meet your writing ally, the AI Grammar Checker app! Unlock
                precision and polish in every sentence effortlessly. Whether
                it's crafting emails, essays, or creative pieces, let our
                intelligent tool enhance your writing, ensuring clarity and
                correctness.
              </p>
            </div>
          </div>
          <div className="grammar_features_container">
            <div className="sticky_heading">
              <p className="logo_small_inverted">Good {<br />} Grammar</p>
              <h1>
                Why use AI <span className="underline_text">Gramar</span>{" "}
                Checker?
              </h1>
              <p>
                Why settle for ordinary when your writing can be{" "}
                <span className="highlight_text purple">extraordinary</span>?
                Our AI Grammar Checker is your ticket to polished,{" "}
                <span className="underline_text">error-free</span> content.
              </p>
            </div>

            <div className="grammar_features">
              <div className="grammar_block yellow">
                <img src={require("../../assets/star.png")} alt="" />
                <h2>Latest in-house trained AI</h2>
                <p>
                  Experience unparalleled linguistic prowess with our latest
                  in-house trained AI, a cutting-edge innovation that elevates
                  the precision and depth of language understanding to new
                  heights.
                </p>
              </div>
              <div className="grammar_block yellow">
                <img src={require("../../assets/lilghning.png")} alt="" />
                <h2>Fast and reliable</h2>
                <p>
                  Swift and dependable, our advanced AI brings you a writing
                  experience that is both fast and reliable, ensuring seamless
                  assistance whenever you need it.
                </p>
              </div>
              <div className="grammar_block yellow">
                <img src={require("../../assets/doc.png")} alt="" />{" "}
                <h2>Support docx format</h2>
                <p>
                  Seamlessly handle your documents with support for docx format,
                  providing flexibility and convenience for all your writing
                  needs.
                </p>
              </div>
              <div className="grammar_block yellow">
                <img src={require("../../assets/file.png")} alt="" />
                <h2>Download-able file for ease of use</h2>
                <p>
                  Unlock the gateway to effortless brilliance with our
                  seamlessly downloadable files. Designed for unparalleled ease
                  of use.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <HomeFooter disable="true" />

      {popUp && <Popup title={popUpText} closePopup={closePopup} />}
    </div>
  );
};

export default Grammar;
