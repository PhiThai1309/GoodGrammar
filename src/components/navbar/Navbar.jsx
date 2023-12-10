import React from "react";
import "./Navbar.css";
import { RedirectToSignIn, UserButton, useAuth } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

// In case the user signs out while on the page.

const Navbar = () => {
  return (
    <nav>
      <div className="placeholder"></div>
      <div className="navigation-container">
        <CustomLink href="/">
          <span className="material-symbols-rounded">home</span>
          <span>Home</span>
        </CustomLink>
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
        <span className="material-symbols-rounded">help</span>
        <span className="material-symbols-rounded">
          <UserButton afterSignOutUrl="/" />
        </span>
      </div>
    </nav>
  );
};

function CustomLink({ href, children, ...props }) {
  let path = window.location.pathname;
  return (
    <a
      href={href}
      className={"nav-item" + (path === href ? " selected" : "")}
      {...props}
    >
      {children}
    </a>
  );
}

export default Navbar;
