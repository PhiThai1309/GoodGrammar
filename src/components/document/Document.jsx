import React from 'react'
import './Document.css'

const Document = ({id, title, onClick}) => {
  return (
    <button className="history-item" id={id} onClick={onClick}>
        <span className="material-symbols-rounded">draft</span>
        <p>{title}</p>
    </button>
  )
}

export default Document