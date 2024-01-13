import PlanCard from "../../components/planCard/PlanCard";
import "./Subscription.css";

const Subscription = (props) => {
  const renderPlanCards = () => {
    const plans = [
      {
        name: "Free",
        svg: "money.png",
        des: "5000 words per file. Up to 30 files per week",
        price: "$0",
      },
      {
        name: "Novice",
        svg: "coin.png",
        des: "Unlimited word count. Up to 100 files per week",
        price: "$30",
      },
      {
        name: "Expert",
        svg: "coinbag.png",
        des: "Unlimited word count. Unlimited files correction",
        price: "$50",
      },
    ];

    return plans.map((plan) => (
      <PlanCard
        key={plan.name}
        name={plan.name}
        svg={plan.svg}
        des={plan.des}
        price={plan.price}
        color={props.sub && props.sub.name === plan.name ? "orange" : undefined}
      />
    ));
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
      <div className="offer_plan">{renderPlanCards()}</div>
    </div>
  );
};

export default Subscription;
