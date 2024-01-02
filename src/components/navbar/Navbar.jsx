import React from "react";
import "./Navbar.css";
import { UserButton } from "@clerk/clerk-react";

// In case the user signs out while on the page.

const Navbar = () => {
  return (
    <nav>
      <div className="navbar-logo">
        <CustomLink href="/">
          <p className="logo">Good {<br />} Grammar</p>
        </CustomLink>
      </div>
      <div className="navigation-container">
        <CustomLink href="/grammar">
          {/* <span className="material-symbols-rounded">spellcheck</span> */}
          <span>Checker</span>
        </CustomLink>
        <CustomLink href="/history">
          {/* <span className="material-symbols-rounded">history</span> */}
          <span>History</span>
        </CustomLink>
      </div>
      <div className="subscribe">
        <CustomLink href="/subscribe">
          {/* <span className="material-symbols-rounded">workspace_premium</span> */}
          {/* <span>Subscription</span> */}
          <button class="Btn">
            <svg class="logoIcon" height="1em" viewBox="0 0 576 512">
              <path d="M309 106c11.4-7 19-19.7 19-34c0-22.1-17.9-40-40-40s-40 17.9-40 40c0 14.4 7.6 27 19 34L209.7 220.6c-9.1 18.2-32.7 23.4-48.6 10.7L72 160c5-6.7 8-15 8-24c0-22.1-17.9-40-40-40S0 113.9 0 136s17.9 40 40 40c.2 0 .5 0 .7 0L86.4 427.4c5.5 30.4 32 52.6 63 52.6H426.6c30.9 0 57.4-22.1 63-52.6L535.3 176c.2 0 .5 0 .7 0c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40c0 9 3 17.3 8 24l-89.1 71.3c-15.9 12.7-39.5 7.5-48.6-10.7L309 106z"></path>
            </svg>
            Go Premium
            {/* <span class="tooltip">Click here!!</span> */}
          </button>
        </CustomLink>
      </div>
      <div className="profile-container">
        {/* <span className="material-symbols-rounded">help</span> */}
        <div className="user_btn">
          <UserButton afterSignOutUrl="/" />
          {/* <span>Account</span> */}
        </div>
      </div>
    </nav>
  );
};

function CustomLink({ href, children, ...props }) {
  let path = window.location.pathname;
  return (
    <a
      href={href}
      className={"nav-item" + (path === href ? " nav_selected" : "")}
      {...props}
    >
      {children}
    </a>
  );
}

export default Navbar;
