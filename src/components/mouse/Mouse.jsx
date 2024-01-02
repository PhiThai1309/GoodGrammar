import React from "react";
import "./Mouse.css";

const Mouse = () => {
  return (
    <div className="mouse-block">
      <a href="#below">
        <div id="mouse-scroll">
          <div className="mouse">
            <div className="mouse-in"></div>
          </div>
          <div>
            <span className="down-arrow-1"></span>
            <span className="down-arrow-2"></span>
            <span className="down-arrow-3"></span>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Mouse;
