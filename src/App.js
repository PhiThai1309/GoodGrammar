import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from "./components"
//import { useState } from "react";
import { Home, Grammar, History } from './pages'

function App() {
  return (
    <div className="App">
      <div className="background-container">
        <Navbar />
        <div className="content-container">
          <BrowserRouter>
            <Routes>
              <Route index element={<Home />} />
              <Route path='grammar' element={<Grammar />} />
              <Route path='history' element={<History />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
