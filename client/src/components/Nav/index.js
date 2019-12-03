import React from "react";
import "./style.css";

function Nav() {
  return (
    <div className="nav-bar">
      <div className="brand" />
      <div className="hr-blue" />
      <a href="/">Posts</a>
      <a href="/">Events</a>
      <a href="/">About</a>
      <a href="/">Contact</a>
      <a href="/">Sign Up</a>
    </div>
  );
}

export default Nav;
