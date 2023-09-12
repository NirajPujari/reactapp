// src/components/AboutSection.js
import React from "react";
import "./styles/AboutSection.css";
import gymImage from "./assets/gymimage1.png";

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <h2>About Us</h2>
        <div className="about-text">
          <p>
            Your Gym is a premier fitness center committed to helping you
            achieve your health and fitness goals. With state-of-the-art
            equipment, highly qualified trainers, and a variety of classes, we
            provide the best environment to optimize your workout experience.
          </p>
          <p>
            Whether you're just starting your fitness journey or looking to take
            your training to the next level, our expert team is here to support
            and guide you every step of the way. We offer personalized training
            plans, group classes, nutritional counseling, and much more to help
            you reach your fitness goals faster.
          </p>
        </div>
      </div>
      <div className="about-image">
        <img src={gymImage} alt="Gym Interior" />
      </div>
    </section>
  );
};

export default AboutSection;