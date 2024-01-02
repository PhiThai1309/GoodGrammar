import React from "react";
import "./Mouse.css";

const Mouse = () => {
  return (
    <div className="mouse-block">
      <a href="#below">
        <div id="mouse-scroll">
          <div class="mouse">
            <div class="mouse-in"></div>
          </div>
          <div>
            <span class="down-arrow-1"></span>
            <span class="down-arrow-2"></span>
            <span class="down-arrow-3"></span>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Mouse;
