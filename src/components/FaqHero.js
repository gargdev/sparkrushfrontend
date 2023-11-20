import React from "react";
import "../styles/faqhero.css";
import Banglore from "../assets/Group 8.png";

const FaqHero = () => {
  return (
    <>
      <div className="container faq-parent">
        <img src={Banglore} alt="" />
        <div className="container faq">
          <div className="faqs">
            <div className="container faq-left">
              <h5>Q1: What is SparkRush?</h5>
              <p>
                SparkRush is a revolutionary electronics delivery service
                designed to bring your favorite gadgets to your doorstep in
                minutes. Say goodbye to long wait times and hello to a faster,
                more efficient way of receiving your tech essentials.
              </p>
            </div>
            <div className="container faq-right">
              <h5>Q2: How does SparkRush work?</h5>
              <p>
                Using our user-friendly app, simply select the electronics you
                need, place an order, and watch as SparkRush delivers them to
                you in record time. It's that easy!
              </p>
            </div>
          </div>
          <hr />
          <div className="faqs">
            <div className="container faq-left">
              <h5>Q3: Where is SparkRush available?</h5>
              <p>
                SparkRush will be initially launching in Bengaluru. We're
                excited to expand to more locations soon, so stay tuned for
                updates!
              </p>
            </div>
            <div className="container faq-right">
              <h5>Q4: What types of electronics does SparkRush deliver?</h5>
              <p>
                SparkRush is your go-to for a wide range of electronics, from
                gadgets and accessories to components. If it's tech, we're on
                it!
              </p>
            </div>
          </div>
          <hr />
          <div className="faqs">
            <div className="container faq-left">
              <h5>Q5: How can I stay updated on SparkRush's launch?</h5>
              <p>
                To stay in the loop on all things SparkRush, sign up for our
                newsletter on our website. You'll receive exclusive updates,
                sneak peeks, and early access opportunities.
              </p>
            </div>
            <div className="container faq-right">
              <h5>Q6: Can I become a beta tester for SparkRush?</h5>
              <p>
                Absolutely! We're inviting tech enthusiasts to join our beta
                testing phase. Stay tuned for announcements on how you can get
                involved and provide valuable feedback.
              </p>
            </div>
          </div>
          <hr />
          <div className="faqs">
            <div className="container faq-left">
              <h5>Q7: Is my personal information secure with SparkRush?</h5>
              <p>
                Absolutely. At SparkRush, we take your privacy seriously. Rest
                assured that your personal information is handled with the
                utmost care and in accordance with our privacy policy.
              </p>
            </div>
            <div className="container faq-right">
              <h5>Q8: How can I contact SparkRush for more information?</h5>
              <p>
                For any inquiries or additional information, feel free to reach
                out to our customer support team at sparkrush2023@gmail.com.
                We're here to assist you!
              </p>
            </div>
          </div>
          <hr />
          <div className="faqs">
            <div className="container faq-left">
              <h5>Q9: Are there any special launch promotions?</h5>
              <p>
                Yes! We have exciting launch promotions planned for our early
                supporters. Follow us on social media and sign up for our
                newsletter to be the first to know about exclusive deals.
              </p>
            </div>
            <div className="container faq-right">
              <h5>Q10: When is SparkRush officially launching?</h5>
              <p>
                We're putting the finishing touches on SparkRush and gearing up
                for our official launch. Keep an eye on our website and social
                media channels for the big reveal!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqHero;
