import React from "react";
import "../styles/footer.css";
import frame1 from "../assets/Frame.png";
import frame2 from "../assets/Frame (1).png";
import frame3 from "../assets/Frame (2).png";
import frame4 from "../assets/Frame (3).png";
import frame5 from "../assets/Frame (4).png";
import frame6 from "../assets/Frame (5).png";
import frame7 from "../assets/Frame (6).png";

const Footer = () => {
  return (
    <div className="footer-parent">
      <div className="container footer">
        <div className="footer-left">
          <h1>Ignite your journey</h1>
          <h4>
            Sparkrush <p>©2023 All Rights Reserved, Sparkrush</p>{" "}
          </h4>
        </div>

        <div className="footer-middle">
          <div className="container footer-middle1">
            <h2>Support</h2>
            <h5>Have questions? Get in touch or check out our FAQs.</h5>
            <br /> <br /> <br />
            <h5>
              You can also text our support team at +91-9119690127 or email us
              at sparkrush2023@gmail.com
            </h5>
          </div>

          <div className="container footer-middle2">
            <h2>Privacy Policy</h2>
            <h2>Terms & Conditions</h2>
          </div>
        </div>

        <div className="footer-right">
          <h2>Social</h2>
          <img src={frame1} alt="" />
          <img src={frame2} alt="" />
          <img src={frame3} alt="" />
          <img src={frame4} alt="" />
          <img src={frame5} alt="" />
          <img src={frame6} alt="" />
          <img src={frame7} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
