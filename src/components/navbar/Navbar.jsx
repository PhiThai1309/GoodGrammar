import React from "react";
import "./Navbar.css";
import { UserButton } from "@clerk/clerk-react";
import { NavLink } from "react-router-dom";

// In case the user signs out while on the page.

const Navbar = () => {
  return (
    <nav>
      <div className="nav_container">
        <div className="navbar-logo">
          <CustomLink href="/">
            <p className="logo_small_inverted">Good {<br />} Grammar</p>
          </CustomLink>
        </div>
        <div className="navigation-container">
          {/* <CustomLink href="/">
            <span className="material-symbols-rounded">home</span>
            <span>Home</span>
          </CustomLink> */}
          <CustomLink href="/grammar">
            <span className="material-symbols-rounded">spellcheck</span>
            <span>Grammar</span>
          </CustomLink>
          <CustomLink href="/history">
            <span className="material-symbols-rounded">history</span>
            <span>History</span>
          </CustomLink>
          <CustomLink href="/subscribe">
            <span className="material-symbols-rounded">workspace_premium</span>
            <span>Subscription</span>
          </CustomLink>
        </div>

        <div className="profile-container">
          {/* <span className="material-symbols-rounded">help</span> */}
          <div className="user_btn">
            <UserButton afterSignOutUrl="/" />
            {/* <button onClick={handleClick}>test click</button> */}
            <span>Account</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

function CustomLink({ href, children, ...props }) {
  return (
    <NavLink
      to={href}
      className={({ isActive, isPending }) =>
        isPending
          ? "pending"
          : isActive
          ? `${href.split("/")[1]}_nav nav-item`
          : "nav-item"
      }
    >
      {children}
    </NavLink>
  );
}

export default Navbar;
