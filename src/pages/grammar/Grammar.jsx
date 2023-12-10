import React, { useLayoutEffect, useRef, useState } from "react";
import "./Grammar.css";

const Grammar = (props) => {
  const [model, setModel] = useState("standard");

  const clickDelete = (e) => {};

  const clickUpload = (event) => {
    const file = event.target.files[0];
    if (!file) {
      console.log("No file selected");
      return;
    }

    const fd = new FormData();
    fd.append("file", file);
    console.log(fd.get("file"));
  };

  const clickParaphrase = (e) => {};

  const clickDownload = (e) => {};

  const textbox = useRef(null);

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  return (
    <div className="grammar">
      <h2>Grammar Checker</h2>

      <div className="model">
        <h3>Models:</h3>
        <ul className="model-menu">
          <li
            onClick={() => {
              setModel("standard");
            }}
            className={model === "standard" ? "selected" : null}
          >
            Standard
          </li>
          <li
            onClick={() => {
              setModel("formal");
            }}
            className={model === "formal" ? "selected" : null}
          >
            Formal
          </li>
          <li
            onClick={() => {
              setModel("academic");
            }}
            className={model === "academic" ? "selected" : null}
          >
            Academic
          </li>
          <li
            onClick={() => {
              setModel("simple");
            }}
            className={model === "simple" ? "selected" : null}
          >
            Simple
          </li>
        </ul>
      </div>
      <div className="content">
        <div className="content-left">
          <div
            className="textarea"
            contentEditable="true"
            placeholder="Enter text here or import word file"
          ></div>
          <div className="input-buttons">
            <button className="icon-button" onClick={clickDelete}>
              <span className="material-symbols-rounded">delete</span>
            </button>
            <input
              type="file"
              id="file"
              onChange={clickUpload}
              accept=".doc, .docx, .txt, .pdf"
            ></input>
            <label htmlFor="file" className="icon-button">
              <span className="material-symbols-rounded">upload_file</span>
            </label>
            <button className="filled-btn orange" onClick={clickParaphrase}>
              Check
            </button>
          </div>
        </div>

        <div className="content-right">
          <textarea
            name="text"
            placeholder="Corrected text will be shown here"
            disabled
          ></textarea>
          <div className="input-buttons">
            {/* <button className="filled-btn orange" onClick={clickDownload}>
              Download
            </button> */}
            <button className="download-button">
              <div className="docs filled-btn orange">
                <svg
                  className="css-i6dzq1"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  fill="none"
                  stroke-width="2"
                  stroke="currentColor"
                  height="20"
                  width="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line y2="13" x2="8" y1="13" x1="16"></line>
                  <line y2="17" x2="8" y1="17" x1="16"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>{" "}
                Download
              </div>
              <div className="download">
                <svg
                  className="css-i6dzq1"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  fill="none"
                  stroke-width="2"
                  stroke="currentColor"
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line y2="3" x2="12" y1="15" x1="12"></line>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grammar;
