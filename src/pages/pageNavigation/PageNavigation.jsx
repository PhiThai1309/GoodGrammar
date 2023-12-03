// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from '../../components';
//import { useState } from "react";
import { Grammar, History } from "..";
import './PageNavigation.css'

const PageNavigation = (props) => {
  const contentPage = () => {
    switch (props.content) {
      case "history": return <History />
      case "grammar": return <Grammar />

      default: return <></>
    }
  }

  return (
    <div className="pageNav">
      <div className="background-container">
        <Navbar />
        <div className="content-container">
          {contentPage()}
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
