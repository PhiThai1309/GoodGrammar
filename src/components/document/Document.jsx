import React from "react";
import "./Document.css";

const Document = (props) => {
  return (
    <div
      className={
        "history-item" +
        (props.selectedId === props.item.file_id ? " selected" : "")
      }
      id={props.id}
    >
      <div className="document-info flex_common" onClick={props.documentClick}>
        <span className="material-symbols-rounded">description</span>
        <p className="paragraph">{props.item.file_name}</p>
      </div>
      <button className="simple-button" onClick={props.openPopup}>
        <span className="material-symbols-rounded">delete</span>
      </button>
    </div>
  );
};

export default Document;
