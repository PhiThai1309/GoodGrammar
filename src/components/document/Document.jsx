import React from "react";
import "./Document.css";

const Document = (props) => {
  return (
    <div
      className={"history-item" + (props.selectedId === props.item.file_id ? " selected" : "")}
      id={props.id}
    >
      <div className="document-info flex_common" onClick={props.documentClick}>
        <span className="material-symbols-rounded">description</span>
        <p>{props.item.file_name}</p>
      </div>
      <button className="simple-button" onClick={props.deleteClick}>
        <span className="material-symbols-rounded">more_vert</span>
      </button>
    </div>
  );
};

export default Document;
