// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "../../components";
//import { useState } from "react";
import { Grammar, History } from "..";
import "./PageNavigation.css";

const PageNavigation = (props) => {
  const contentPage = () => {
    switch (props.content) {
      case "history":
        return <History />;
      case "grammar":
        return <Grammar />;

      default:
        return <></>;
    }
  };

  return (
    <div className="background-container">
      <Navbar />
      <>{contentPage()}</>
    </div>
  );
};

export default PageNavigation;
