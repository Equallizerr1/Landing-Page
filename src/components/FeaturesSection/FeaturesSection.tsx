import React, { useEffect, useState } from "react";
import "./FeaturesSection.scss";
import { SvgIconComponent } from "@mui/icons-material";
import ShareIcon from "@mui/icons-material/Share";
import NatureIcon from "@mui/icons-material/Nature";
import GroupIcon from "@mui/icons-material/Group";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import SavingsIcon from "@mui/icons-material/Savings";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import ReduceCapacityIcon from "@mui/icons-material/ReduceCapacity";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import colors from "../../utils/colors.ts";
import WelcomeScreenImage from "../../assets/images/app-welcome-screen.png";

interface Feature {
  title: string;
  description: string;
  icon: React.ElementType<SvgIconComponent>;
}

const features: Feature[] = [
  {
    title: "Instant Tool Sharing",
    description:
      "Share tools instantly with neighbors, making every project easier and more accessible.",
    icon: ShareIcon,
  },
  {
    title: "Eco-Friendly",
    description:
      "Reduce waste by borrowing instead of buying, helping to minimize environmental impact.",
    icon: NatureIcon,
  },
  {
    title: "Community Building",
    description:
      "Strengthen your community by sharing resources and fostering relationships among neighbors.",
    icon: GroupIcon,
  },
  {
    title: "DIY Projects",
    description:
      "Unlock your DIY potential by accessing a wide range of tools for any project at home.",
    icon: HomeRepairServiceIcon,
  },
  {
    title: "Save Money",
    description:
      "Save on expenses by borrowing tools you need only occasionally, rather than purchasing them.",
    icon: SavingsIcon,
  },
  {
    title: "Support Local Initiatives",
    description:
      "Support your local economy and initiatives by sharing tools within your neighborhood.",
    icon: VolunteerActivismIcon,
  },
  {
    title: "Reduce Clutter",
    description:
      "Keep your home clutter-free by not accumulating rarely used tools.",
    icon: ReduceCapacityIcon,
  },
  {
    title: "Empower Creativity",
    description:
      "Empower your creative projects by having access to specialized tools when you need them.",
    icon: BuildCircleIcon,
  },
];

const FeaturesSection: React.FC = () => {
  const [activeFeatureIndex, setActiveFeatureIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeatureIndex((prevIndex) => (prevIndex + 1) % features.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id={"features"}
      className="features-section"
      style={{ backgroundColor: colors.primary }}
    >
      <div className="content">
        <div className="section-image-container">
          <img
            src={WelcomeScreenImage}
            alt="Features of ToolShareApp"
            className="section-image"
          />
          <div className="section-image-icon">
            {features.map((feature, index) => (
              <div
                className={
                  index === activeFeatureIndex ? "icon active" : "icon"
                }
                key={index + 1}
              >
                <feature.icon
                  style={{
                    color:
                      index === activeFeatureIndex
                        ? colors.warning
                        : colors.lightEcoBackground,
                    fontSize: 140,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="section-text">
          <h2>Features</h2>
          {features.map((feature, index) => (
            <div
              key={index}
              className={`feature-item ${index === activeFeatureIndex ? "active" : ""}`}
            >
              <h3
                className="feature-item-title"
                style={{
                  color:
                    index === activeFeatureIndex
                      ? colors.warning
                      : colors.lightEcoBackground,
                }}
              >
                <feature.icon
                  style={{
                    color:
                      index === activeFeatureIndex
                        ? colors.warning
                        : colors.lightEcoBackground,
                  }}
                />
                {feature.title}
              </h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
