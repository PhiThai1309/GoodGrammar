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
import { BASE_URL, SUB_TIER, TEST_AUTH } from "../../api";
import { useEffect, useState } from "react";

const PageNavigation = (props) => {
  const { getToken, isLoaded, isSignedIn } = useAuth();
  const [token, setToken] = useState(null);
  const [subscriptionStatus, setSubscriptionStatus] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (isLoaded && isSignedIn) {
          const obtainedToken = await getToken({ template: "dev" });
          setToken(obtainedToken);
        }
      } catch (error) {
        console.error("Error obtaining token:", error);
      }
    };

    fetchData();
  }, [isLoaded, isSignedIn, getToken]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(SUB_TIER, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`, // Assume token is defined in your component's scope
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        // Update component state with fetched data
        setSubscriptionStatus(data);
        //console log the data
        console.log(data);
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        setError(error.message);
        setLoading(false); // Set loading to false on error
      }
    };

    fetchData();
  }, [TEST_AUTH, token]);

  const contentPage = () => {
    switch (props.content) {
      case "history":
        return <History sub={subscriptionStatus} />;
      case "grammar":
        return <Grammar sub={subscriptionStatus} />;
      case "subscribe":
        return <Subscription sub={subscriptionStatus} />;
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
