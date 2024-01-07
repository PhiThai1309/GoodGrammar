import React, { useLayoutEffect, useRef, useState } from "react";
import "./Grammar.css";
import Mouse from "../../components/mouse/Mouse";
import placeholder from "../../assets/placeholder1.png";
import { HomeFooter } from "../../components";
import DownloadBtn from "../../components/downloadBtn/DownloadBtn";
import UnlockPro from "../../components/unlockPro/UnlockPro";

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
      {/* <h2>Grammar Checker</h2> */}

      <div className="header">
        <h3>Grammar Checker</h3>
        <UnlockPro />
      </div>

      <div className="content_wrapper">
        <div className="model">
          <h3 className="green_text">Models:</h3>
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
            <DownloadBtn class="orange" />
          </div>
        </div>
      </div>

      <Mouse></Mouse>

      <div id="below">
        <div className="grammar_intro">
          <h2>
            Introducing <b>AI Grammar Checker</b>
          </h2>
          <h3 className="right_align">
            a <b> {"smart"} </b> companion for flawless writing.
          </h3>
          <p>
            Meet your writing ally, the AI Grammar Checker app! Unlock precision
            and polish in every sentence effortlessly. Bid farewell to
            grammatical errors and welcome a new era of refined communication.
            Whether it's crafting emails, essays, or creative pieces, let our
            intelligent tool enhance your writing, ensuring clarity and
            correctness. Experience the confidence that comes with error-free
            expression, thanks to the seamless assistance of our AI Grammar
            Checker."
          </p>
        </div>
        <div className="grammar_features_container">
          <h2>Why use AI Grammar Checker?</h2>
          <div className="grammar_features">
            <svg
              width="200"
              height="200"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {" "}
              <g clipPath="url(#clip0_221_10)">
                {" "}
                <path
                  d="M0 0H100C155.228 0 200 44.7715 200 100V200H100C44.7715 200 0 155.228 0 100V0Z"
                  fill="url(#paint0_linear_221_10)"
                />{" "}
              </g>{" "}
              <defs>
                {" "}
                <linearGradient
                  id="paint0_linear_221_10"
                  x1="100"
                  y1="0"
                  x2="100"
                  y2="200"
                  gradientUnits="userSpaceOnUse"
                >
                  {" "}
                  <stop stopColor="#A7B5FF" />{" "}
                  <stop offset="1" stopColor="#F3ACFF" />{" "}
                </linearGradient>{" "}
                <clipPath id="clip0_221_10">
                  {" "}
                  <rect width="200" height="200" fill="white" />{" "}
                </clipPath>{" "}
              </defs>{" "}
            </svg>
            <div className="simple_flex grammar_block">
              <div className="item_1 flex_common_vertical">
                <h3>Support with different language model</h3>
                <img src={placeholder} />
              </div>
              <div className="item_2 flex_common_vertical">
                <h3>Artificial Intelligent</h3>
                <img />
              </div>
            </div>
            <div className="simple_flex grammar_block">
              <div className="item_2 flex_common_vertical">
                <h3>Support doc, docx and pdf format</h3>
                <img />
              </div>
              <div className="item_1 flex_common_vertical">
                <h3>Support with different language model</h3>
                <img src={placeholder} />
              </div>
            </div>
            <svg
              width="200"
              height="200"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {" "}
              <g clipPath="url(#clip0_104_40)">
                {" "}
                <path
                  d="M100.254 200C97.0998 200 94.4337 197.716 93.6699 194.656C91.2352 184.903 86.5744 174.531 79.6875 163.542C71.5278 150.347 59.8958 138.108 44.7917 126.823C31.6549 116.894 18.5181 110.123 5.38138 106.511C2.27005 105.656 0 102.897 0 99.6702V99.6702C0 96.5066 2.18273 93.7795 5.22473 92.9109C18.1045 89.2335 30.5122 83.2631 42.4479 75C56.1632 65.4514 67.6215 53.993 76.8229 40.625C84.9629 28.7165 90.5507 16.9388 93.5863 5.29207C94.3815 2.24095 97.0676 0 100.221 0V0C103.409 0 106.114 2.29058 106.89 5.3833C108.642 12.3654 111.38 19.512 115.104 26.8229C119.792 35.8507 125.781 44.5312 133.073 52.8646C140.538 61.0243 148.872 68.4028 158.073 75C170.097 83.5231 182.32 89.5111 194.744 92.964C197.792 93.8109 200 96.5244 200 99.6874V99.6874C200 102.898 197.725 105.634 194.629 106.483C186.754 108.642 178.648 112.124 170.313 116.927C160.243 122.83 150.868 129.861 142.187 138.021C133.507 146.007 126.389 154.427 120.833 163.281C113.933 174.293 109.267 184.745 106.837 194.639C106.083 197.708 103.413 200 100.254 200V200Z"
                  fill="url(#paint0_linear_104_40)"
                />{" "}
              </g>{" "}
              <defs>
                {" "}
                <linearGradient
                  id="paint0_linear_104_40"
                  x1="27.5"
                  y1="19"
                  x2="149"
                  y2="174.5"
                  gradientUnits="userSpaceOnUse"
                >
                  {" "}
                  <stop stopColor="#FFD9A0" />{" "}
                  <stop offset="1" stopColor="#FFF5F1" />{" "}
                </linearGradient>{" "}
                <clipPath id="clip0_104_40">
                  {" "}
                  <rect width="200" height="200" fill="white" />{" "}
                </clipPath>{" "}
              </defs>{" "}
            </svg>
          </div>
        </div>
      </div>

      <HomeFooter disable="true" />
    </div>
  );
};

export default Grammar;
