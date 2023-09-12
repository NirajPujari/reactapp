import React, { useEffect, useState } from "react";
import "./styles/HeroSection.css";
import gymImage from "./assets/gymimage2.png";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [backgroundPosition, setBackgroundPosition] = useState("bottom");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setBackgroundPosition(`center ${scrollPosition * 0.08}px`);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${gymImage})`, backgroundPosition }}
    >
      <div className="hero-content">
        <h2>Welcome to PowerHouse Fitness</h2>
        <p>Get Fit, Stay Healthy, and Have Fun!</p>
        <Link to="/home/join" className="cta-button">
          Join Now
        </Link>
        <div className="additional-content">
          <p>Enjoy state-of-the-art facilities and top-notch trainers.</p>
          <p>Join our group fitness classes for a fun workout experience.</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;