import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from "./components/NavBar";
import { useState } from "react";
import { Home, Grammar, Paraphraser } from './containers'

function App() {
  return (
    <div className="App">
      <div className="background-container">
        <NavBar></NavBar>
        <div className="content-container">
          <BrowserRouter>
            <Routes>
              <Route index element={<Home />} />
              <Route path='paraphraser' element={<Paraphraser />} />
              <Route path='grammar' element={<Grammar />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
