import React, { useLayoutEffect, useRef, useState } from "react";
import "./Grammar.css";
import placeholder from "../../assets/placeholder1.png";
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

const Grammar = (props) => {
  const { getToken } = useAuth();
  const [model, setModel] = useState("standard");
  const [uploadedText, setUploadedText] = useState("");
  const [upload, setUpload] = useState(null);
  const [resultText, setResultText] = useState("");
  const [result, setResult] = useState(null);
  const [popUp, setPopup] = useState(false);
  const [popUpText, setPopupText] = useState("");
  const [getLoading, setLoading] = useState(false);
  const [fullScreenLoading, setFullScreenLoading] = useState(false);

  const clickDelete = (e) => {
    setUpload(null);
    setUploadedText("");
    setResult(null);
    setResultText("");
  };

  const clickUpload = async (event) => {
    setLoading(true);
    const file = event.target.files[0];
    event.target.value = "";

    if (!file) {
      console.log("No file selected");
      return;
    }

    const fd = new FormData();
    fd.append("file", file);
    console.log(file);
    setUpload(file);

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
    // Check word count if free user
    if (props.sub.name === "Free") {
      const wordCount = uploadedText.split(/\s+/).length;
      if (wordCount > 5000) {
        setPopupText("Free user can only check file up to 5000 words.");
        setPopup(true);
        return;
      }
    }

    const fd = new FormData();
    fd.append("file", upload);

    // Get edited file ID
    const response = await axios.post(API.uploadFile(), fd).catch((err) => {
      console.error(err);
    });

    // Save file ID to history
    const token = await getToken();
    const fileId = response.data.edited_file_id;
    console.log(fileId);
    const history = await axios.post(
      API.history(),
      { fileId: fileId },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(history.data);

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
    let fileNameArray = upload.name.split(".");
    const fileType = fileNameArray.pop();

    // Create download link for the file
    const url = URL.createObjectURL(result);
    const link = document.createElement("a");
    link.href = url;
    link.download = fileNameArray.join(".") + "(edited)" + "." + fileType;
    link.click();
  };

  const textbox = useRef(null);

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

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
          <h3>LMS AI v1.1</h3>
        </div>
        <div className="content">
          <div className="content-left">
            <div className="relative-container">
              <textarea
                name="text"
                placeholder={
                  !getLoading ? "Imported text will be displayed here" : null
                }
                value={uploadedText}
                disabled
              />
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
                accept=".doc, .docx"
              ></input>
              <label htmlFor="file" className="icon-button">
                {upload ? null : <h5>Upload file &nbsp;</h5>}
                <span className="material-symbols-rounded">upload_file</span>
              </label>
              <button
                className={`filled-btn ${upload ? "green" : "disable"}`}
                onClick={clickParaphrase}
              >
                Check
              </button>
            </div>
          </div>

          <div className="content-right">
            <textarea
              name="text"
              placeholder="Corrected text will be shown here"
              value={resultText}
              disabled
            ></textarea>
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
            <h2>Why use AI Grammar Checker?</h2>
            <div className="grammar_features">
              <div className="grammar_block green">
                <h3>Latest in-house trained AI</h3>
                <img src={placeholder} alt="" />
              </div>
              <div className="grammar_block orange">
                <h3>Fast and reliable</h3>
                <img src={require("../../assets/feature-speed.png")} alt="" />
              </div>
              <div className="grammar_block purple">
                <h3>Support doc and docx format</h3>
                <img src={require("../../assets/upload-feature.png")} alt="" />
              </div>
              <div className="grammar_block yellow">
                <h3>Download-able file for ease of use</h3>
                <img
                  src={require("../../assets/download-feature.png")}
                  alt=""
                />
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
