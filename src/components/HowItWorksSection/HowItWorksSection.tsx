import React from "react";
import "./HowItWorksSection.scss";
import DownloadIcon from "@mui/icons-material/GetApp";
import HandshakeIcon from "@mui/icons-material/Handshake";
import BuildIcon from "@mui/icons-material/Build";
import ChatScreenImage from "../../assets/images/app-chat-screen.png";

const HowItWorksSection: React.FC = () => {
  return (
    <section id="how-it-works" className="content-section how-it-works-section">
      <div className="content">
        <img
          src={ChatScreenImage}
          alt="How ToolShare works"
          className={"section-image"}
        />
        <div className="section-text">
          <h2>How It Works</h2>
          <div className="steps">
            <div className="step">
              <DownloadIcon fontSize="large" />
              <h3>Download the App</h3>
              <p>
                Start by downloading ToolShare from the App Store or Google
                Play. It's available for free and easy to set up.
              </p>
            </div>
            <div className="step">
              <HandshakeIcon fontSize="large" />
              <h3>Create an Account</h3>
              <p>
                Sign up with your email or social media account. We value your
                privacy and security.
              </p>
            </div>
            <div className="step">
              <BuildIcon fontSize="large" />
              <h3>Start Sharing or Borrowing</h3>
              <p>
                Browse tools available in your community or list your own.
                Whether you need a drill for a day or have a ladder to spare,
                ToolShare makes it simple.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
