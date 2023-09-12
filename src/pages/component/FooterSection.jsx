// src/components/FooterSection.js
import React from "react";
import "./styles/FooterSection.css";
const FooterSection = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <p>
          &copy; {new Date().getFullYear()} PowerHouse Fitness. All
          rightsreserved.
        </p>
        <p>Contact us: pujari.niraj@gmail.com</p>
      </div>
      <div className="social-media">
        <div className="social-media-img">
          <a
            href="https://www.facebook.com/facebookIndia"
            class="fa fa-facebook"
            target="_blank"
            rel="noreferrer"
          ></a>
          <a
            href="#"
            class="fa fa-twitter"
            target="_blank"
            rel="noreferrer"
          ></a>
          <a
            href="#"
            class="fa fa-youtube"
            target="_blank"
            rel="noreferrer"
          ></a>
          <a
            href="#"
            class="fa fa-instagram"
            target="_blank"
            rel="noreferrer"
          ></a>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
