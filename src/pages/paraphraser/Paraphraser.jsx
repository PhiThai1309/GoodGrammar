import React, { useState } from 'react'
import './Paraphraser.css'

const Paraphraser = () => {
  const [model, setModel] = useState('standard')

  const clickDelete = (e) => {
    
  }

  const clickUpload = (event) => {
    const file = event.target.files[0];
    if (!file) {
      console.log("No file selected");
      return;
    }

    const fd = new FormData();
    fd.append('file', file)
    console.log(fd.get('file'))
  }

  const clickParaphrase = (e) => {

  }

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
          <textarea placeholder='Enter text here or import word file'></textarea>
          <div className="input-buttons">
            <button className='icon-button' onClick={clickDelete}><span className="material-symbols-rounded">delete</span></button>
            <input type="file" id='file' onChange={clickUpload} accept=".doc, .docx, .txt, .pdf"></input>
            <label htmlFor="file" className='icon-button'><span className="material-symbols-rounded">upload_file</span></label>            
            <button className='paraphrase-button' onClick={clickParaphrase}>Paraphrase</button>
          </div>
        </div>
        <div className="content-right">
          <textarea placeholder='Paraphrase text will be shown here' disabled></textarea>
        </div>
      </div>
    </div>
  )
}

export default Paraphraser