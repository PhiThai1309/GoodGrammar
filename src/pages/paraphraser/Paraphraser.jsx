import React, { useState } from 'react'
import './Paraphraser.css'

const Paraphraser = () => {
  const [model, setModel] = useState('standard')

  return (
    <div className="paraphraser">
      <h1>Paraphraser</h1>
      <div className="model">
        <h3>Models:</h3>
        <ul className="model-menu">
          <li onClick={() => {setModel("standard")}}>Standard{model==="standard"?<hr/>:<></>}</li>
          <li onClick={() => {setModel("formal")}}>Formal{model==="formal"?<hr/>:<></>}</li>
          <li onClick={() => {setModel("academic")}}>Academic{model==="academic"?<hr/>:<></>}</li>
          <li onClick={() => {setModel("simple")}}>Simple{model==="simple"?<hr/>:<></>}</li>
        </ul>
      </div>
      <div className="content">
        <div className="content-left">
          <textarea>
            
          </textarea>
          <div className="input-buttons">

          </div>
        </div>
        <div className="content-right">

        </div>
      </div>
    </div>
  )
}

export default Paraphraser