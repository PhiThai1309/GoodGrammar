// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from '../../components';
//import { useState } from "react";
import { Grammar, History } from "..";
import './PageNavigation.css'

const PageNavigation = (props) => {
  return (
    <div className="pageNav">
      <div className="background-container">
        <Navbar />
        <div className="content-container">
          {props.content === "history" ? <History />:<></>}
          {props.content === "grammar" ? <Grammar />:<></>}
          {/* <BrowserRouter>
            <Routes>
              <Route index element={<Home />} />
              <Route path="history" element={<History />} />
              <Route path="grammar" element={<Grammar />} />
            </Routes>
          </BrowserRouter> */}
        </div>
      </div>
    </div>
  );
};

export default PageNavigation;
