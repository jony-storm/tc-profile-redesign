import React, { FC, ReactElement } from "react";
import "./footer.css";
import { Facebook, Twitter, LinkedIn, Instagram, YouTube } from "@material-ui/icons";

const Footer: FC<any> = (): ReactElement => {
  return (
    <div className="footer">
      <div className="left">
        <span className="footer-l-link">&copy; 2022 Topcoder</span>
        <span className="footer-l-link">Support</span>
        <span className="footer-l-link">See a bug?</span>
        <span className="footer-l-link">Terms</span>
        <span className="footer-l-link">Privacy Policy</span>
      </div>
      <div className="right">
        <span className="circle"><Facebook className="footer-r-icon"/></span>
        <span className="circle"><YouTube className="footer-r-icon"/></span>
        <span className="circle"><LinkedIn className="footer-r-icon"/></span>
        <span className="circle"><Twitter className="footer-r-icon"/></span>
        <span className="circle"><Instagram className="footer-r-icon"/></span>
      </div>
    </div>
  );
}

export default Footer;
