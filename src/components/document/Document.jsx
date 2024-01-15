import React from 'react'
import './Document.css'

const Document = (props) => {
  return (
    <button className="history-item" id={props.id} onClick={props.onClick}>
        <span className="material-symbols-rounded">draft</span>
        <p>{props.item.file_name}</p>
    </button>
  )
}

export default Document