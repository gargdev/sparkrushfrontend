import React from "react";
// import store from "../assets/store.png";
import techbag from "../assets/techbag.png";
import office from "../assets/officetech.png";
import homeapp from "../assets/homeapp.png";
import "../styles/hero.css";

const Hero = () => {
  return (
    <div className="hero-parent">
      <div className="container hero">
        <h2 className="primary-heading">Doorstep Delivery</h2>
        <h2>
          {" "}
          <span>"Get Ready, Bengaluru! SparkRush is Coming Soon!"</span>{" "}
        </h2>
        <p>
          Exciting times ahead! SparkRush is gearing up to transform the way you
          receive your favorite electronics. Be prepared for lightning-fast
          deliveries right at your doorstep.
        </p>

        {/* <div className="store1">
          <img src={store} alt="" />
        </div> */}

        <div className="container productus">
          <img src={techbag} alt="" className="img1" />
          <img src={office} alt="" className="img2" />
          <img src={homeapp} alt="" className="img3" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
