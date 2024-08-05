import React from "react";
import "./Footer.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__section">
        <h3>Support</h3>
        <ul>
          <li>
            <a href="#help-centre">Help Centre</a>
          </li>
          <li>
            <a href="#aircover">AirCover</a>
          </li>
          <li>
            <a href="#anti-discrimination">Anti-discrimination</a>
          </li>
          <li>
            <a href="#disability-support">Disability Support</a>
          </li>
          <li>
            <a href="#cancellation-options">Cancellation Options</a>
          </li>
          <li>
            <a href="#report-concern">Report Neighbourhood Concern</a>
          </li>
        </ul>
      </div>
      <div className="footer__section">
        <h3>Hosting</h3>
        <ul>
          <li>
            <a href="#airbnb-your-home">Airbnb Your Home</a>
          </li>
          <li>
            <a href="#aircover-for-hosts">AirCover for Hosts</a>
          </li>
          <li>
            <a href="#hosting-resources">Hosting Resources</a>
          </li>
          <li>
            <a href="#community-forum">Community Forum</a>
          </li>
          <li>
            <a href="#hosting-responsibly">Hosting Responsibly</a>
          </li>
          <li>
            <a href="#join-hosting-class">Join a Free Hosting Class</a>
          </li>
        </ul>
      </div>
      <div className="footer__section">
        <h3>Airbnb</h3>
        <ul>
          <li>
            <a href="#newsroom">Newsroom</a>
          </li>
          <li>
            <a href="#new-features">New Features</a>
          </li>
          <li>
            <a href="#careers">Careers</a>
          </li>
          <li>
            <a href="#investors">Investors</a>
          </li>
          <li>
            <a href="#emergency-stays">Airbnb.org Emergency Stays</a>
          </li>
        </ul>
      </div>
      <div className="footer__social">
        <h3>Follow Us</h3>
        <div className="footer__social-links">
          <a href="#facebook" aria-label="Facebook">
            <FaFacebook />
          </a>
          <a href="#twitter" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="#instagram" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="#linkedin" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
        </div>
        <div className="footer__copyright">
          <p>
            &copy; {new Date().getFullYear()} Airbnb Clone. All rights reserved.
          </p>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
