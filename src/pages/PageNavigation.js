import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "../components";
//import { useState } from "react";
import { Home, Grammar, History } from "../pages";

const PageNavigation = () => {
  return (
    <div>
      <div className="background-container">
        <Navbar />
        <div className="content-container">
          <BrowserRouter>
            <Routes>
              {/* <Route index element={<Home />} /> */}
              <Route path="history" element={<History />} />
              <Route path="grammar" element={<Grammar />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
};

export default PageNavigation;
