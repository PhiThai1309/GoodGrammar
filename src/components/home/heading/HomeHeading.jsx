import { Link } from "react-router-dom";
import "./HomeHeading.css";
import React, { useEffect, useState } from "react";

const HomeHeading = () => {
  function MyComponent() {
    const [string, setString] = useState("");
    const text = ["A", "m", "p", "l", "i", "f", "y"];
    let index = 0;

    useEffect(() => {
      //delay 1s during frist load
      setTimeout(() => {
        const interval = setInterval(() => {
          if (index < text.length && string === "") {
            setString((prev) => {
              return (prev += text[index++]);
            });
          }
        }, 300);
        return () => clearInterval(interval);
      }, 1000);
    });

    return <div className="highlight_text">{string}</div>;
  }

  return (
    <div className="home_header">
      <svg
        className="blod-header"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 758 988"
        fill="none"
      >
        <path
          d="M212.62 612.524C-150.133 425.364 -14.6123 92.8726 375.617 212.621C562.777 -150.132 895.268 -14.611 775.52 375.618C1138.25 562.721 1002.75 895.27 612.523 775.521C425.584 1138.18 92.8472 1002.7 212.62 612.524Z"
          fill="url(#paint0_linear_116_223)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_116_223"
            x1="638.369"
            y1="46.9443"
            x2="317.541"
            y2="923.312"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C5F263" />
            <stop offset="1" stopColor="#F9ECFF" />
          </linearGradient>
        </defs>
      </svg>
      <div className="home_header_heading">
        {/* <img
          className="heading_title"
          src={require("../../../assets/heading-home.png")}
          alt=""
        /> */}
        <h1>
          Refine Your <span className="underline_text">Writting</span>
        </h1>
        <h1 className="highlight_text_wrapper">
          <div className="highlight_text_container">
            <img src={require("../../../assets/caret_icon.png")} alt="" />
            {MyComponent()}
          </div>
          <span> Your Impact!</span>
        </h1>
      </div>
      <Link to="login">
        <button className="filled-btn">Try now</button>
      </Link>
      <div className="home_img_section">
        <img src={require("../../../assets/placeholder.png")} alt="" />
      </div>
    </div>
  );
};

export default HomeHeading;
