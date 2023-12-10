// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "../../components";
//import { useState } from "react";
import { Grammar, History } from "..";
import "./PageNavigation.css";

const PageNavigation = (props) => {
  const contentPage = () => {
    switch (props.content) {
      case "history":
        return <History openNav={console.log("lift up")} />;
      case "grammar":
        return <Grammar />;

      default:
        return <></>;
    }
  };

  return (
    <div className="background-container">
      <div className="navBar_wrapper">
        <Navbar />
      </div>
      <>{contentPage()}</>
    </div>
  );
};

export default PageNavigation;
