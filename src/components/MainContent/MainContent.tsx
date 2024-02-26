import "./MainContent.scss";

import AboutImage from "../../assets/images/about.webp";
import FeaturesSection from "../FeaturesSection/FeaturesSection.tsx";

const MainContent: React.FC = () => {
  return (
    <main className="main-content">
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
                Join our <span className="highlight info">community</span> to
                make DIY and repairs{" "}
                <span className="highlight warning">easy</span> and{" "}
                <span className="highlight eco">eco-friendly</span>.
              </p>
              <p>
                Let's <span className="highlight secondary">build</span> a{" "}
                <span className="highlight success">greener</span> world
                together!
              </p>
              <p className="extra-info">
                With ToolShare, you're not just fixing things - you're fixing
                the future.
              </p>
            </div>
          </div>
        </div>
      </section>
      <FeaturesSection />
      <section id="how-it-works" className="content-section">
        <div className="content">
          {/*<img src={howItWorksImage} alt="How ToolShare works" />*/}
          <div className="section-text">
            <h2>How It Works</h2>
            <p>Simple steps to start using ToolShare.</p>
          </div>
        </div>
      </section>
      <section id="download" className="content-section">
        <div className="content">
          {/*<img src={howItWorksImage} alt="How ToolShare works" />*/}
          <div className="section-text">
            <h2>Download ToolShareApp</h2>
            <p>Simple steps to start using ToolShare.</p>
          </div>
        </div>
      </section>
      {/*<section id="testimonials" className="content-section">*/}
      {/*  <div className="content">*/}
      {/*    /!*<img src={testimonialsImage} alt="User testimonials" />*!/*/}
      {/*    <div className="section-text">*/}
      {/*      <h2>Testimonials</h2>*/}
      {/*      <p>What users are saying about ToolShare.</p>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</section>*/}
    </main>
  );
};

export default MainContent;
