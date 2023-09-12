// src/components/ServicesSection.js
import React from "react";
import "./styles/ServicesSection.css";
import { Link } from "react-router-dom";
import service1Image from "./assets/service1.png";
import service2Image from "./assets/service2.png";
import service3Image from "./assets/service3.png";
import service4Image from "./assets/service4.png";
import service5Image from "./assets/service5.png";
import service6Image from "./assets/service6.png";
import service7Image from "./assets/service7.png";
import service8Image from "./assets/service8.png";

const ServicesSection = () => {
  const services = [
    {
      title: "Personal Training",
      image: service1Image,
      description:
        "Get personalized one-on-one training tailored to your fitness goals.",
    },
    {
      title: "Group Fitness Classes",
      image: service2Image,
      description:
        "Join our diverse fitness classes led by experienced instructors.",
    },
    {
      title: "Dynamic Movement Training (DMT)",
      image: service7Image,
      description:
        "Dynamic and engaging exercise form that enhances overall mobility, strength, and body functionality.",
    },
    {
      title: "Calisthenics",
      image: service8Image,
      description:
        "Bodyweight-based fitness discipline that leverages natural movements to build strength, flexibility, and endurance.",
    },
    {
      title: "Cardio & Strength Training",
      image: service3Image,
      description:
        "Access top-notch cardio and strength training equipment to push your limits.",
    },
    {
      title: "Yoga & Pilates",
      image: service4Image,
      description:
        "Experience the benefits of yoga and Pilates for flexibility and mindfulness.",
    },
    {
      title: "Swimming Pool",
      image: service5Image,
      description:
        "Enjoy our spacious swimming pool for a refreshing workout or leisure.",
    },
    {
      title: "Sauna & Steam Room",
      image: service6Image,
      description:
        "Relax and rejuvenate in our sauna and steam room facilities.",
    },
  ];

  return (
    <section className="services-section">
      <div className="services-grid">
        {services.map((service, index) => (
          <Link className="session" to="/home/SessionForm">
            <div className="service-item" key={index}>
              <img src={service.image} alt={service.title} />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;