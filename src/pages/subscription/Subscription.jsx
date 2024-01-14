import { useEffect, useState } from "react";
import { API } from "../../api";
import PlanCard from "../../components/planCard/PlanCard";
import "./Subscription.css";
import { useAuth } from "@clerk/clerk-react";
import axios from "axios"; // Import axios

const Subscription = (props) => {
  const renderPlanCards = () => {
    const plans = [
      {
        id: "",
        name: "Free",
        svg: "money.png",
        des: "5000 words per file. Up to 30 files per week",
        price: "$0",
      },
      {
        id: "price_1OWBIPANL0btWpR2aJ7jistJ",
        name: "Novice",
        svg: "coin.png",
        des: "Unlimited word count. Up to 100 files per week",
        price: "$30",
      },
      {
        id: "price_1OWBJ8ANL0btWpR2t9tUc97S",
        name: "Expert",
        svg: "coinbag.png",
        des: "Unlimited word count. Unlimited files correction",
        price: "$50",
      },
    ];

    return plans.map((plan) => (
      <PlanCard
        id={plan.id}
        key={plan.name}
        name={plan.name}
        svg={plan.svg}
        des={plan.des}
        price={plan.price}
        color={props.sub && props.sub.name === plan.name ? "orange" : undefined}
        onSubscribeClick={handleSubscribeClick}
      />
    ));
  };

  const { getToken } = useAuth(); // Assuming your authentication library provides a getToken function
  const [loading, setLoading] = useState(false);

  const [stripePortalLink, setStripePortalLink] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch user token
        const token = await getToken({ template: "dev" });

        // Make the request to openStripePortal API with axios
        const response = await axios.post(
          API.openStripePortal(),
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        const data = response.data;

        // Check if the response contains an error
        if (data.error) {
          throw new Error(`API error: ${data.error}`);
        }

        // Update component state with the Stripe Portal link
        setStripePortalLink(data.url);
        console.log(data);
        setLoading(true); // Set loading to false once data is fetched
      } catch (error) {
        setLoading(false); // Set loading to false on error
        console.error("Error opening Stripe Portal:", error.message);
      }
    };

    fetchData();
  }, [getToken]);

  const handleButtonClick = (url) => {
    window.location.href = url;
  };

  const [redirectLink, setRedirectLink] = useState(null);

  const handleSubscribeClick = async (selectedPlan) => {
    try {
      // Fetch user token
      const token = await getToken({ template: "dev" });
      console.log(token);
      // Make the request to createCheckoutSession API
      const response = await axios.post(
        API.createCheckOutSession(),
        {
          price_id: selectedPlan,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      const data = response.data;

      if (!data) {
        throw new Error("Invalid response from createCheckoutSession API");
      }

      // Redirect to the link returned by the API
      setRedirectLink(data.url);
      console.log(data.url);
    } catch (error) {
      console.error("Error creating checkout session:", error.message);
    }
  };

  useEffect(() => {
    if (redirectLink) {
      // Navigate to the link when redirectLink changes
      window.location.href = redirectLink;
    }
  }, [redirectLink]);

  return (
    <div className="subscribe overflow">
      <svg
        width="800"
        height="800"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {" "}
        <g clipPath="url(#clip0_119_275)">
          {" "}
          <path
            d="M127.14 200C99.9942 200 99.9943 167.423 72.8487 167.423C41.6048 167.423 0 158.386 0 127.133C0 99.9885 32.5678 99.9885 32.5678 72.8445C32.5678 41.6139 41.6048 0 72.8602 0C100.006 0 100.006 32.5774 127.151 32.5774C158.384 32.5774 200 41.6139 200 72.8675C200 100.012 167.421 100.012 167.421 127.156C167.409 158.444 158.384 200 127.14 200Z"
            fill="url(#paint0_linear_119_275)"
          />{" "}
        </g>{" "}
        <defs>
          {" "}
          <linearGradient
            id="paint0_linear_119_275"
            x1="100"
            y1="0"
            x2="100"
            y2="200"
            gradientUnits="userSpaceOnUse"
          >
            {" "}
            <stop stopColor="#DF99F7" /> <stop offset="1" stopColor="#FFDBB0" />{" "}
          </linearGradient>{" "}
          <clipPath id="clip0_119_275">
            {" "}
            <rect width="200" height="200" fill="white" />{" "}
          </clipPath>{" "}
        </defs>{" "}
      </svg>
      <div className="header">
        <h3>Subscription plan</h3>
        {loading && (
          <button
            onClick={() => handleButtonClick(stripePortalLink)}
            className="dotted-btn"
          >
            Payment Settings
          </button>
        )}
      </div>
      <div className="offer_plan">{renderPlanCards()}</div>
    </div>
  );
};

export default Subscription;
