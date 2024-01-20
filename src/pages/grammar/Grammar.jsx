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
  const [mergedChanges, setMergedChanges] = useState(false);

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
    setMergedChanges(false);
  };

  const clickUpload = async (event) => {
    handleScrollToTop();
    setUploadedText("");
    setMergedChanges(false);
    setResult(null);
    setResultText("");
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
        setPopupText("Error uploading file. Please try again.");
        setPopup(true);
      });
  };

  const clickParaphrase = async (e) => {
    try {
      setFullScreenLoading(true);
      const token = await getToken();

      const fd = new FormData();
      fd.append("file", upload);

      // Get edited file ID
      const response = await axios
        .post(API.uploadFile(), fd, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .catch((error) => {
          const msg = error.response.data.message;

          if (msg === "Wordcount threshold reached") {
            setPopupText(
              "Your word file has exceed the word count limit for the current subscription plan. Consider upgrading to a higher subscription tier if you want to proceed."
            );
          } else if (msg === "User has reached the upload threshold") {
            setPopupText(
              "You have reached the upload threshold for your current subscription plan. Consider upgrading to a higher subscription tier if you want to proceed."
            );
          } else {
            setPopupText("An unexpected error occurred. Please try again.");
          }

          setPopup(true);
        });

      // Check if the response is successful
      if (response !== undefined && response.status === 200) {
        const fileId = response.data.edited_file_id;

        // Get text
        const textResponse = await axios
          .get(API.getFileInfo(fileId))
          .catch((error) => {
            setPopupText("Error fetching text. Please try again.");
            setPopup(true);
          });

        // Check if the response is successful
        if (textResponse !== undefined && textResponse.status === 200) {
          setResultText(textResponse.data.content);
        }

        // Get file
        const fileResponse = await axios
          .get(API.getFile(fileId), {
            responseType: "blob",
          })
          .catch((error) => {
            // Handle error when fetching file
            setPopupText("Error fetching file. Please try again.");
            setPopup(true);
          });

        // Check if the response is successful
        if (fileResponse !== undefined && fileResponse.status === 200) {
          setResult(fileResponse.data);
        }
      }
    } catch (error) {
      console.error(error);
      setPopupText("An unexpected error occurred. Please try again.");
      setPopup(true);
    } finally {
      setFullScreenLoading(false);
    }
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
          <div style={{ gap: "8px" }} className="simple_flex">
            <h3 className="green_text">Models:</h3>
            <h3>LLM AI v1.1</h3>
          </div>
          {resultText ? (
            <div style={{ gap: "12px" }} className="simple_flex">
              <div
                style={{ gap: "8px", alignItems: "center" }}
                className="simple_flex"
              >
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    border: "1px solid white",
                  }}
                  className="removed"
                />
                <p>Deleted text</p>
              </div>
              <div
                style={{ gap: "8px", alignItems: "center" }}
                className="simple_flex"
              >
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    border: "1px solid white",
                  }}
                  className="added"
                />
                <p>Added text</p>
              </div>
            </div>
          ) : null}
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
              {upload && !getLoading ? (
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
                {upload && !getLoading ? null : <h5>Upload file &nbsp;</h5>}
                <span className="material-symbols-rounded">upload_file</span>
              </label>
              <button
                className={`filled-btn ${
                  upload && !getLoading ? "orange" : "disable"
                }`}
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

            {mergedChanges ? (
              <div
                className="result_content"
                style={{ whiteSpace: "pre-wrap" }}
              >
                {resultText}
              </div>
            ) : (
              <div
                className="result_content"
                style={{ whiteSpace: "pre-wrap" }}
                dangerouslySetInnerHTML={highlightDifferences()}
              />
            )}

            {!resultText && (
              <div className="placeholder_result">
                <h2>Corrected text will be shown here</h2>
              </div>
            )}
            {console.log(mergedChanges)}
            <DownloadBtn
              className="orange"
              onClick={clickDownload}
              isVisible={result !== null}
              state={mergedChanges}
              mergeChange={() => setMergedChanges(() => !mergedChanges)}
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
