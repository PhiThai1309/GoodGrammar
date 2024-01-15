import "./Loading.css";

const Loading = (props) => {
  //Add a loading popup
  return (
    <div className={`loading + ${props.fixed ? "fixed" : null}`}>
      <div
        aria-label="Orange and tan hamster running in a metal wheel"
        role="img"
        className={`wheel-and-hamster + ${
          props.fixed ? "fixed_background" : null
        }`}
      >
        <div className="wheel"></div>
        <div className="hamster">
          <div className="hamster__body">
            <div className="hamster__head">
              <div className="hamster__ear"></div>
              <div className="hamster__eye"></div>
              <div className="hamster__nose"></div>
            </div>
            <div className="hamster__limb hamster__limb--fr"></div>
            <div className="hamster__limb hamster__limb--fl"></div>
            <div className="hamster__limb hamster__limb--br"></div>
            <div className="hamster__limb hamster__limb--bl"></div>
            <div className="hamster__tail"></div>
          </div>
        </div>
        <div className="spoke"></div>
      </div>
    </div>
  );
};

export default Loading;
