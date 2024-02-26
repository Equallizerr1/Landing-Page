import React from "react";
import "./AboutSection.scss";
import AboutImage from "../../assets/images/about.webp";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="content-section">
      <div className="content">
        <img
          src={AboutImage}
          alt="Sharing tools in a community"
          className="section-image"
        />
        <div className="section-text">
          {/*<h2>About</h2>*/}
          <div className="banner-text">
            <p>
              <span className="highlight primary">Borrow</span>,{" "}
              <span className="highlight accent">lend</span>, and{" "}
              <span className="highlight success">save</span> with just a tap.
            </p>
            <p>
              Join our <span className="highlight info">community</span> to make
              DIY and repairs <span className="highlight warning">easy</span>{" "}
              and <span className="highlight eco">eco-friendly</span>.
            </p>
            <p>
              Let's <span className="highlight secondary">build</span> a{" "}
              <span className="highlight success">greener</span> world together!
            </p>
            <p className="extra-info">
              With ToolShare, you're not just fixing things - you're fixing the
              future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
