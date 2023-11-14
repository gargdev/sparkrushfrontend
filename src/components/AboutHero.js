import React from "react";
import "../styles/abouthero.css";
// import store from "../assets/store.png";
import appliances from "../assets/elec.png";
import img1 from "../assets/16692184_5738134 1.png";
import img2 from "../assets/Group 3.png";
import img3 from "../assets/Group 5.png";

const AboutHero = () => {
  return (
    <div className="container about-parent">
      <div className="container content-container">
        <div className="container left">
          <h5>About us</h5>
          <h1>
            Welcome to <span>SparkRush</span>, where innovation meets{" "}
            <span>CONVINIENCE!</span>
          </h1>
          <p>
            At SparkRush, we're on a mission to revolutionize the way you
            exprience electronics delivery. Set to launch soon in Bengaluru, we
            are excited to bring you a new era of swift, reliable, and
            hassle-free delivery for all your tech needs.
          </p>
          <p>
            Our Story: <br /> SparkRush was born out of a simple idea: to make
            electronics delivery as fast and efficient as the technology it
            delivers. Tired of waiting for your favorite gadgets? So are we! Our
            team of tech enthusiasts and logistics experts came together to
            create a solution that not only meets but exceeds your expectations.
          </p>
        </div>
        <div className="container right">
          <img src={img1} alt="" />
        </div>
      </div>
      <div className="content-container1">
        <div className="left">
          <img src={img2} alt="" />
        </div>
        <div className="right">
          <h1>
            What Sets Us <span>APART</span>
          </h1>
          <ul>
            <li>
              Speed: We understand the need for speed in the fast-paced world of
              technology.
            </li>
            <p>
              With SparkRush, your electronics will be delivered to your
              doorstep in minutes, not hours.
            </p>
            <li>
              Innovation: Our user-friendly app is designed with you in mind.
              Say goodbye
            </li>
            <p>
              to the ordinary and embrace a new standard of innovation in
              electronics delivery.
            </p>
            <li>
              Reliability: Your gadgets are precious, and we treat them as such
              SparkRush is committed to ensuring the secure and reliable
              delivery of your electronics.
            </li>
          </ul>
        </div>
      </div>
      <div className="content-container2">
        <div className="left">
          <h1>Why SparkRush?</h1>
          <ul>
            <li>Lightning-speed deliveries.</li>
            <li>A user-friendly app for seamless ordering.</li>
            <li>Secure handling of your gadgets.</li>
            <li>A commitment to customer satisfaction.</li>
          </ul>
          <p>
            Join Us on this Journey: As we gear up for our official launch, we
            invite you to join us on this exciting journey. Sign up for
            exclusive updates, early access, and special promotions. Be the
            first to experience the future of electronics delivery with
            SparkRush.
          </p>
          <p>
            Thank you for choosing SparkRush – where every delivery sparks a new
            adventure! Stay tuned for more updates, and let's revolutionize
            electronics delivery together!
          </p>
        </div>
        <div className="container right">
          <img src={img3} alt="" />
        </div>
      </div>
      <div className="appliances">
        <img src={appliances} alt="" />
      </div>
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

        <div className="store">{/* <img src={store} alt="" /> */}</div>
      </div>
    </div>
  );
};

export default AboutHero;
