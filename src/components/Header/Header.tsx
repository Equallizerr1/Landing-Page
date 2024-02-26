import "./Header.scss";
import Logo from "../Logo/Logo.tsx";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import colors from "../../utils/colors.ts";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
    closeMenu();
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="branding">
          <Logo width="80px" height="80px" />
          <div className="branding-text">
            <h1>
              <span className="tool">Tool</span>
              <span className="share">Share</span>
              <span className="app">App</span>
            </h1>
            <p>Tools for Earth's Care</p>
          </div>
        </div>
        <nav className={`navigation ${isMenuOpen ? "open" : ""}`}>
          <ul>
            <li onClick={() => scrollToSection("about")} tabIndex={0}>
              About
            </li>
            <li onClick={() => scrollToSection("features")} tabIndex={0}>
              Features
            </li>
            <li onClick={() => scrollToSection("how-it-works")} tabIndex={0}>
              How it works
            </li>
            <li
              onClick={() => scrollToSection("download")}
              tabIndex={0}
              className={"button-menu"}
            >
              Download
            </li>
          </ul>
        </nav>
        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <CloseIcon style={{ color: colors.primary }} />
          ) : (
            <MenuIcon style={{ color: colors.primary }} />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
