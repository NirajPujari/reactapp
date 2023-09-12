// src/components/Sesssion.js
import React, { useState } from "react";
import "./styles/SessionList.css";

const session = [
  {
    title: "Session",
    description: "This are for a session of an hour",
    facilities: {
      "Strength Training": "$4.99",
      Calisthenics: "$4.99",
      "Group Fitness Classes": "$7.99",
      Cardio: "$4.99",
      "Swimming Pool": "$9.99",
      "Sauna Steam Room": "$9.99",
      Yoga: "$4.99",
      "Personal Training": "$14.99",
    },
  },
];

const SessionList = () => {
  const [expandedCardIndex, setExpandedCardIndex] = useState(null);
  let clickTimeout;

  const handleCardClick = (index) => {
    if (clickTimeout) {
      clearTimeout(clickTimeout);
      clickTimeout = null;
      setExpandedCardIndex(index);
    } else {
      clickTimeout = setTimeout(() => {
        clickTimeout = null;
        setExpandedCardIndex(null);
      }, 300);
    }
  };

  return (
    <div className="session-list">
      {session.map((session, index) => (
        <div
          key={index}
          className={`session-card ${
            index === expandedCardIndex ? "expanded" : ""
          }`}
          onClick={() => handleCardClick(index)}
        >
          <div className="session-content">
            <h3 className="title">{session.title}</h3>
            <p className="description">{session.description}</p>
            {index !== expandedCardIndex && (
              <div className="facilities">
                {Object.entries(session.facilities).map(([facility, price]) => (
                  <div key={facility} className="facilities-item">
                    <span className="facilities-name">{facility}</span>
                    <span className="facilities-price">{price}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SessionList;