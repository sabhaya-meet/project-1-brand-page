import React from "react";
import heroLogo from "../assets/hero-image.png";

const Hero = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          {" "}
          vitae. Nisi, quasi architecto? Accusantium, illo perspiciatis! At
          numquam culpa consequatur accusantium animi quos quisquam aliquid,
          distinctio quidem, sed dolore explicabo odio voluptates debitis
          veniam?
        </p>
        <div className="hero-btn">
          <button>ShopNow</button>
          <button className="secondary-btn">Category</button>
        </div>
        <div className="shopping">
          <p>Also Available On </p>
        </div>
      </div>
      <div className="hero-image">
        <img src={heroLogo} alt="" className="heroImaga" />
      </div>
    </main>
  );
};

export default Hero;
