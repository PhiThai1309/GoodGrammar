import React from "react";
import "./Document.css";

const Document = (props) => {
  return (
    <div
      className={
        "history-item " + props.id &&
        (props.selected === props.id ? "selected" : "")
      }
      id={props.id}
    >
      <div className="document-info flex_common" onClick={props.onClick}>
        <span class="material-symbols-rounded">description</span>
        <p>{props.item.file_name}</p>
      </div>
      <button className="simple-button">
        <span class="material-symbols-rounded">more_vert</span>
      </button>
    </div>
  );
};

export default Document;
