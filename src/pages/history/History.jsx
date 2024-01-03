import React, { useState, useEffect } from "react";
import { Document } from "../../components";
import "./History.css";
import DownloadBtn from "../../components/downloadBtn/DownloadBtn";

const History = () => {
  const [selected, setSelected] = useState(null);

  // Use for updating document ig
  useEffect(() => console.log(selected));

  return (
    <div className="history_container">
      <div className="header">
        <h3>History</h3>
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

          <div>
            <h3>Quick tips</h3>
            <p>
              Harness the precision of our Grammar AI to effortlessly perfect
              your writing
            </p>
            <button />
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
