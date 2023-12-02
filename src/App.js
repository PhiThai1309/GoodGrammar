import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import { useState } from "react";
import { Home } from "./pages";
import PageNavigation from "./pages/PageNavigation";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="pageNavigation" element={<PageNavigation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
