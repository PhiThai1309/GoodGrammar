// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "../../components";
//import { useState } from "react";
import { Grammar, History } from "..";
import "./PageNavigation.css";
import { RedirectToSignIn, useAuth } from "@clerk/clerk-react";

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

  const { isLoaded, userId } = useAuth();

  // In case the user signs out while on the page.
  if (!isLoaded || !userId) {
    return <RedirectToSignIn to="login" />;
  } else {
    return (
      <div className="background-container">
        <div className="navBar_wrapper">
          <Navbar />
        </div>
        <>{contentPage()}</>
      </div>
    );
  }
};

export default PageNavigation;
