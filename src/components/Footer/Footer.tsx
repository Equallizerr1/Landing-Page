import React from "react";
import "./Footer.scss";
import Logo from "../Logo/Logo";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <Logo width="80px" height="80px" />
        <p className="slogan">
          Borrow, Reuse, Protect: Every Tool's an Eco Choice
        </p>
        <p className="copyright">
          © {new Date().getFullYear()} ToolShareApp. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
