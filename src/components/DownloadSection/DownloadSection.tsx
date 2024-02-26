import React from "react";
import "./DownloadSection.scss";
import AppStoreLogo from "../../assets/images/appstore-logo.svg";
import GooglePlayLogo from "../../assets/images/googleplay-logo.svg";
import SignInScreenImage from "../../assets/images/app-sign-in-screen.png";

const DownloadSection: React.FC = () => {
  return (
    <section id="download" className="content-section download-section">
      <div className="content">
        <img
          src={SignInScreenImage}
          alt="Download ToolShare"
          className={"section-image"}
        />
        <div className="section-text">
          <h2>Get Ready to Transform Your Tool Sharing Experience</h2>
          <p>
            Exciting news! <span className="highlight">ToolShare</span> is soon
            launching on both{" "}
            <span className="highlight accent">App Store</span> and{" "}
            <span className="highlight accent">Google Play</span>. Prepare to
            dive into a world where sharing tools becomes as{" "}
            <span className="highlight success">easy</span> and{" "}
            <span className="highlight eco">eco-friendly</span> as never before.
          </p>
          <p>
            Stay tuned for the{" "}
            <span className="highlight warning">release date</span> and be among
            the first to{" "}
            <span className="highlight primary">embrace the change</span> that
            ToolShare brings to your community.
          </p>
          <div className="store-logos">
            <img src={AppStoreLogo} alt="App Store" />
            <img src={GooglePlayLogo} alt="Google Play" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
