import React from "react";
import "./Document.css";

const Document = (props) => {
  return (
    <div
      className={"history-item" + (props.selected === props.id ? " selected" : "")}
      id={props.id}
      onClick={props.onClick}
    >
      <div className="document-info flex_common">
        <span className="material-symbols-rounded">description</span>
        <p>{props.item.file_name}</p>
      </div>
      <button className="simple-button">
        <span className="material-symbols-rounded">more_vert</span>
      </button>
    </div>
  );
};

export default Document;
