import React, { useState, useEffect } from "react";
import { Document } from "../../components";
import "./History.css";
import DownloadBtn from "../../components/downloadBtn/DownloadBtn";
import UnlockPro from "../../components/unlockPro/UnlockPro";

const History = () => {
  const [selected, setSelected] = useState(null);

  // Use for updating document ig
  useEffect(() => console.log(selected));

  return (
    <div className="history_container">
      <div className="header">
        <h3>History</h3>
        <UnlockPro />
      </div>
      <div className="history">
        <div className="history-bar">
          <div className="history_document_container">
            <h4>Today</h4>
            <div className="history_document">
              <Document
                id="1"
                title="Document #11231231231231231231231231"
                onClick={(e) => setSelected(e.target.id)}
              />
              <Document
                id="2"
                title="Document #2"
                onClick={(e) => setSelected(e.target.id)}
              />
              <Document
                id="3"
                title="Document #3"
                onClick={(e) => setSelected(e.target.id)}
              />
            </div>
          </div>

          <div className="tips_card">
            <h3>Quick tips</h3>
            <p className="paragraph">
              Harness the precision of our Grammar AI to effortlessly perfect
              your writing
            </p>
            <button className="circle_btn_small"> Learn more </button>{" "}
            <svg
              id="sw-js-blob-svg"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              {" "}
              <defs>
                {" "}
                <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                  {" "}
                  <stop
                    id="stop1"
                    stop-color="rgba(27, 71, 21, 0.4)"
                    offset="0%"
                  ></stop>{" "}
                  <stop
                    id="stop2"
                    stop-color="rgba(165.212, 239.721, 155.052, 0.64)"
                    offset="80%"
                  ></stop>{" "}
                </linearGradient>{" "}
              </defs>{" "}
              <path
                fill="url(#sw-gradient)"
                d="M28.7,-31.1C36.5,-27.6,41.8,-18,41.8,-8.7C41.9,0.5,36.6,9.3,30.8,16.3C25,23.3,18.6,28.5,11.6,30.4C4.6,32.4,-3.1,31,-10.7,28.6C-18.3,26.2,-25.9,22.7,-31.9,16.4C-37.9,10.1,-42.3,1,-41.2,-7.6C-40.1,-16.2,-33.5,-24.2,-25.8,-27.7C-18,-31.2,-9,-30.3,0.7,-31.1C10.4,-32,20.8,-34.6,28.7,-31.1Z"
                width="100%"
                height="100%"
                transform="translate(80 55)"
                stroke-width="0"
                stroke="url(#sw-gradient)"
              ></path>{" "}
            </svg>
          </div>
        </div>
        <div className="history-text">
          <textarea
            placeholder="Corrected text will be shown here"
            disabled
          ></textarea>
          <div className="input-buttons">
            <DownloadBtn class="green" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
