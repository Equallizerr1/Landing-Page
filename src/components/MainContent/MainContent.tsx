import "./MainContent.scss";
import FeaturesSection from "../FeaturesSection/FeaturesSection.tsx";
import HowItWorksSection from "../HowItWorksSection/HowItWorksSection.tsx";
import DownloadSection from "../DownloadSection/DownloadSection.tsx";
import AboutSection from "../AboutSection/AboutSection.tsx";
import TestimonialsSection from "../TestimonialsSection/TestimonialsSection.tsx";
import Footer from "../Footer/Footer.tsx";

const MainContent: React.FC = () => {
  return (
    <main className="main-content">
      <AboutSection />
      <FeaturesSection />
      <HowItWorksSection />
      <DownloadSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
};

export default MainContent;
