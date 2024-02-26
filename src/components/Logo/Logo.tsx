import logoImage from "../../assets/logo.png";
import "./Logo.scss";
import React from "react";

interface LogoProps {
  width?: string;
  height?: string;
}

const Logo: React.FC<LogoProps> = ({ width = "100px", height = "100px" }) => {
  return (
    <div
      className="logo"
      style={{
        width,
        height,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={logoImage}
        alt="ToolShare"
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
      />
    </div>
  );
};

export default Logo;
