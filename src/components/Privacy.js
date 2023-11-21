import React from "react";
import privacy from "../assets/Group 9.png";
import "../styles/privacy.css";

function Privacy() {
  return (
    <>
      <div className="container privacy-parent">
        <img src={privacy} alt="" />
        <div className="container policies">
          <h4 className="container last-update">Last Updated: 12/11/2023</h4>
          <br />
          <p>
            Welcome to Sparkrush! This Privacy Policy explains how we collect,
            use, disclose, and safeguard your information when you visit our
            website or use our services. By accessing or using Sparkrush, you
            agree to the terms outlined in this policy.
          </p>
          <h5>Information We Collect:</h5>
          <ol className="policy-list">
            <li>
              Personal Information: When you use Sparkrush, we may collect
              personal information such as your name, contact details, and
              address. This information is used for order fulfillment and
              communication purposes.
            </li>
            <li>
              Device Information: We may collect information about the device
              you use to access Sparkrush, including the device type, operating
              system, and browser information. This helps us optimize your
              experience.
            </li>
            <li>
              Usage Data: We may collect information about how you navigate and
              interact with Sparkrush, such as the pages visited, features used,
              and time spent on the platform. This data is used for analytics
              and to enhance our services.
            </li>
          </ol>
          <h5>How We Use Your Information:</h5>
          <ol className="policy-list">
            <li>
              Order Fulfillment: We use your personal information to process and
              fulfill your orders, including delivering electronics to your
              specified address.
            </li>
            <li>
              Communication: We may use your contact information to communicate
              with you about your orders, updates, promotions, and important
              announcements related to Sparkrush.
            </li>
            <li>
              Analytics: Collected data is used for analytical purposes to
              understand user behavior, improve our services, and optimize the
              user experience.
            </li>
          </ol>
          <h5>How We Protect Your Information:</h5>
          <p>
            We take the security of your information seriously. We implement
            industry-standard security measures to safeguard your data from
            unauthorized access, disclosure, alteration, and destruction.
          </p>
          <h5>Third-Party Links:</h5>
          <p>
            Sparkrush may contain links to third-party websites. We are not
            responsible for the privacy practices or content of these external
            sites. Please review the privacy policies of these third parties
            before providing any personal information.
          </p>
          <h5>Your Choices:</h5>
          <p>
            You can manage your communication preferences by adjusting settings
            in your Sparkrush account. If you wish to delete your account or
            have any privacy-related concerns, please contact us at
            sparkrush2023@gmail.com.
          </p>
          <h5>Updates to this Policy:</h5>
          <p>
            We may update this Privacy Policy periodically. Changes will be
            effective upon posting on Sparkrush. We encourage you to review this
            policy regularly to stay informed about how we collect and protect
            your information.
          </p>
          <h5>Contact Us:</h5>
          <p>
            If you have any questions or concerns regarding this Privacy Policy,
            please contact us at sparkrush2023@gmail.com. Thank you for choosing
            Sparkrush. Your privacy is important to us.
          </p>
        </div>
      </div>
    </>
  );
}

export default Privacy;
