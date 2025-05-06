import React from "react";
import logo from "../assets/logo.png";
const Navigation = () => {
  return (
    <nav className="container">
      <div className="logo">
        <img src={logo} className="logo-img" alt="" />
      </div>

      <ul>
        <li href="#">Menu</li>
        <li href="#">Location</li>
        <li href="#">About</li>
        <li href="#">Contact</li>
      </ul>
      <button>login</button>
    </nav>
  );
};

export default Navigation;
