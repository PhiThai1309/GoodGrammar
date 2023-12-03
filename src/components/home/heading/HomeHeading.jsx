import "./HomeHeading.css";

const HomeHeading = () => {
  return (
    <div className="home_header">
      <svg
        className="blod-header"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 758 988; transform: scale(1)"
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
            <stop stop-color="#C5F263" />
            <stop offset="1" stop-color="#F9ECFF" />
          </linearGradient>
        </defs>
      </svg>
      <div className="home_header_heading">
        <img
          className="heading_title"
          src={require("../../../assets/heading-home.png")}
          alt=""
        />
      </div>
      <button className="filled-btn">Try now</button>
      <div className="home_img_section">
        <img src={require("../../../assets/placeholder.png")} alt="" />
      </div>
    </div>
  );
};

export default HomeHeading;
