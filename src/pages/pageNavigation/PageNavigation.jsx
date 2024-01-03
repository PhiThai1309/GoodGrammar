// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "../../components";
//import { useState } from "react";
import { Grammar, History } from "..";
import "./PageNavigation.css";
import {
  RedirectToSignIn,
  SignedIn,
  SignedOut,
  useAuth,
} from "@clerk/clerk-react";
import Subscription from "../subscription/Subscription";

const PageNavigation = (props) => {
  const contentPage = () => {
    switch (props.content) {
      case "history":
        return <History />;
      case "grammar":
        return <Grammar />;
      case "subscribe":
        return <Subscription />;
      default:
        return <></>;
    }
  };

  // const { isLoaded, userId } = useAuth();

  // In case the user signs out while on the page.
  // if (!isLoaded || !userId) {
  //   return <RedirectToSignIn to="login" />;
  // } else {
  return (
    <div>
      <SignedIn>
        <div className="background-container">
          <div className="navBar_wrapper">
            <Navbar />
          </div>
          <>{contentPage()}</>
        </div>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </div>
  );
  // }
};

export default PageNavigation;
