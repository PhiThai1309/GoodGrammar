import PlanCard from "../../components/planCard/PlanCard";
import "./Subscription.css";

const Subscription = () => {
  const svgFamily = () => {
    return (
      <svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {" "}
        <g clipPath="url(#clip0_116_121)">
          {" "}
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.4294 66.2123C15.6458 53.315 19.2658 39.3128 29.2893 29.2893C39.3129 19.2658 53.315 15.6458 66.2123 18.4293C73.3638 7.34131 85.8246 0 100 0C114.175 0 126.636 7.34133 133.788 18.4294C146.685 15.6458 160.687 19.2658 170.711 29.2893C180.734 39.3129 184.354 53.315 181.571 66.2123C192.659 73.3638 200 85.8246 200 100C200 114.175 192.659 126.636 181.571 133.788C184.354 146.685 180.734 160.687 170.711 170.711C160.687 180.734 146.685 184.354 133.788 181.571C126.636 192.659 114.175 200 100 200C85.8246 200 73.3639 192.659 66.2123 181.571C53.315 184.354 39.3129 180.734 29.2893 170.711C19.2658 160.687 15.6458 146.685 18.4294 133.788C7.34132 126.636 0 114.175 0 100C0 85.8246 7.34132 73.3638 18.4294 66.2123ZM71.4555 128.495C87.1454 144.184 112.584 144.184 128.274 128.495C143.964 112.805 143.964 87.3662 128.274 71.6762C112.584 55.9863 87.1454 55.9863 71.4555 71.6762C55.7656 87.3662 55.7656 112.805 71.4555 128.495Z"
            fill="url(#paint0_linear_116_121)"
          />{" "}
        </g>{" "}
        <defs>
          {" "}
          <linearGradient
            id="paint0_linear_116_121"
            x1="27.5"
            y1="19"
            x2="149"
            y2="174.5"
            gradientUnits="userSpaceOnUse"
          >
            {" "}
            <stop stopColor="#FFD9A0" /> <stop offset="1" stopColor="#FFF5F1" />{" "}
          </linearGradient>{" "}
          <clipPath id="clip0_116_121">
            {" "}
            <rect width="200" height="200" fill="white" />{" "}
          </clipPath>{" "}
        </defs>{" "}
      </svg>
    );
  };
  const svgPersonal = () => {
    return (
      <svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {" "}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M169.909 139.373C161.736 129.94 160.408 115.21 165.832 103.97C170.425 94.452 173 83.7766 173 72.5C173 32.4594 140.541 0 100.5 0C60.4594 0 28 32.4594 28 72.5C28 83.522 30.4596 93.9695 34.8598 103.324C40.1723 114.617 38.6997 129.334 30.4352 138.686C20.1832 150.288 12.7935 164.478 9.37176 180.151C7.01575 190.942 16.1944 200 27.2401 200H172.503C183.549 200 192.728 190.943 190.372 180.151C187.017 164.786 179.849 150.845 169.909 139.373Z"
          fill="url(#paint0_linear_133_29)"
        />{" "}
        <defs>
          {" "}
          <linearGradient
            id="paint0_linear_133_29"
            x1="99.8717"
            y1="0"
            x2="99.8717"
            y2="200"
            gradientUnits="userSpaceOnUse"
          >
            {" "}
            <stop stopColor="#B8DBFC" /> <stop offset="1" stopColor="#F8FBFE" />{" "}
          </linearGradient>{" "}
        </defs>{" "}
      </svg>
    );
  };
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
      </div>
      <div className="current_plan">
        <h3>Your Current Plan:</h3>
        <p className="white_text">Free</p>
      </div>
      <div className="offer_plan">
        <PlanCard name="Personal" svg={svgFamily()} color="orange" />
        <PlanCard name="Family" svg={svgPersonal()} color="green" />
      </div>
    </div>
  );
};

export default Subscription;
