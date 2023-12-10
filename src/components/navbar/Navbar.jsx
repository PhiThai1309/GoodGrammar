import React from "react";
import "./Navbar.css";
import { UserButton, useAuth } from "@clerk/clerk-react";

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
          <span>spellcheck</span>
        </CustomLink>
        <CustomLink href="/history">
          <span className="material-symbols-rounded">history</span>
          <span>history</span>
        </CustomLink>
        <CustomLink href="/subscribe">
          <span className="material-symbols-rounded">workspace_premium</span>
        </CustomLink>
      </div>
      <div className="profile-container">
        <span className="material-symbols-rounded">help</span>
        <span className="material-symbols-rounded">
          <UserButton />
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
