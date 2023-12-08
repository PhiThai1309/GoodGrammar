import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import { useState } from "react";
import { Home, PageNavigation } from "./pages";
import Login from "./pages/login/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route
            path="history"
            element={<PageNavigation content="history" />}
          />
          <Route
            path="grammar"
            element={<PageNavigation content="grammar" />}
          />
          <Route
            path="subscribe"
            element={<PageNavigation content="subscribe" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
