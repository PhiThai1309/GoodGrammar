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
import { API } from "../../api";
import { useEffect, useState } from "react";
import axios from "axios"; // Import axios
import Loading from "../../components/loading/Loading";

const PageNavigation = (props) => {
  const { getToken, isLoaded, isSignedIn } = useAuth();
  const [token, setToken] = useState(null);
  const [subscriptionStatus, setSubscriptionStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (isLoaded && isSignedIn) {
          // Obtain the user token
          const obtainedToken = await getToken();
          setToken(obtainedToken);

          // Fetch subscription data using Axios
          const response = await axios.get(API.getSubTier(), {
            headers: {
              Authorization: `Bearer ${obtainedToken}`,
              "Content-Type": "application/json",
            },
          });

          const data = response.data;

          // Check if the response contains an error
          if (response.status !== 200) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }

          // Update component state with fetched data
          setSubscriptionStatus(data);
          // Log the data
          console.log(data);
          setLoading(true); // Set loading to false once data is fetched
        }
      } catch (error) {
        setError(error.message);
        setLoading(false); // Set loading to false on error
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [isLoaded, isSignedIn, getToken]);

  const contentPage = () => {
    switch (props.content) {
      case "history":
        return <History sub={subscriptionStatus} />;
      case "grammar":
        return <Grammar sub={subscriptionStatus} />;
      case "subscribe":
        if (!loading) {
          // Return a loading message or spinner while data is being fetched
          return <Loading />;
        }
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
