// src/components/MembershipList.js
import React from "react";
import "./styles//MembershipList.css";
import { FaCheck, FaTimes } from "react-icons/fa";

const memberships = [
  {
    title: "Basic",
    description: "Access to basic gym facilities",
    facilities: {
      "Strength Training": true,
      Calisthenics: true,
      "Group Fitness Classes": true,
      Cardio: true,
      "Swimming Pool": false,
      "Sauna Steam Room": false,
      Yoga: false,
      "Personal Training": false,
    },
    price: "$24.99/month",
  },
  {
    title: "Premium",
    description: "Access to premium gym facilities and classes",
    facilities: {
      "Strength Training": true,
      Calisthenics: true,
      "Group Fitness Classes": true,
      Cardio: true,
      "Swimming Pool": true,
      Yoga: false,
      "Sauna Steam Room": false,
      "Personal Training": false,
    },
    price: "$49.99/month",
  },
  {
    title: "VIP",
    description: "Access to premium gym facilities and classes with a trainer",
    facilities: {
      "Strength Training": true,
      Calisthenics: true,
      "Group Fitness Classes": true,
      Cardio: true,
      "Swimming Pool": true,
      Yoga: true,
      "Sauna Steam Room": true,
      "Personal Training": true,
    },
    price: "$99.99/month",
  },
];

const MembershipList = () => {
  return (
    <div className="membership-list">
      {memberships.map((membership, index) => (
        <div key={index} className="membership-card">
          <div className="membership-content">
            <h3>{membership.title}</h3>
            <p>{membership.description}</p>
            <div className="facility-list">
              {Object.keys(membership.facilities).map((facility, index) => (
                <div key={index} className="facility">
                  {facility}
                  {membership.facilities[facility] ? (
                    <FaCheck className="check-icon" />
                  ) : (
                    <FaTimes className="cross-icon" />
                  )}
                </div>
              ))}
            </div>
            <button className="button">{membership.price}</button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default MembershipList;