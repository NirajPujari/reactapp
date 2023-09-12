import React, { useState } from "react";
import "./styles/JoinFormMember.css";
import { FaCheck, FaTimes } from "react-icons/fa";
import emailjs from "emailjs-com";

const JoinFormMember = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [membershipType, setMembershipType] = useState("basic");

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
      description:
        "Access to premium gym facilities and classes with a trainer",
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

  function generateString(type) {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz2456780";
    let result = "";
    let number = "456";
    let random = number.charAt(Math.floor(Math.random() * 3));
    if (type == "vip") {
      for (let i = 0; i < random; i++) {
        result += characters.charAt(Math.floor(Math.random() * 59));
      }
      result += "9";
      for (let i = 0; i < random; i++) {
        result += characters.charAt(Math.floor(Math.random() * 59));
      }
    } else if (type == "premium") {
      for (let i = 0; i < random; i++) {
        result += characters.charAt(Math.floor(Math.random() * 59));
      }
      result += "3";
      for (let i = 0; i < random; i++) {
        result += characters.charAt(Math.floor(Math.random() * 59));
      }
    } else {
      for (let i = 0; i < random; i++) {
        result += characters.charAt(Math.floor(Math.random() * 59));
      }
      result += "1";
      for (let i = 0; i < random; i++) {
        result += characters.charAt(Math.floor(Math.random() * 59));
      }
    }
    return result;
  }

  const sendEmail = (name, id, membership, email) => {
    // Replace these with your own Email.js service ID, template ID, and user ID
    const serviceID = "service_3nb1e9i";
    const templateID = "template_5fqf8xi";
    const userID = "c8ffsL4LaXZ0IefY0";

    emailjs
      .send(serviceID, templateID, { name, id, membership, email }, userID)
      .then(() => {
        console.log("Email sent successfully");
      })
      .catch((error) => {
        console.error("Email error:", error);
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate email using a regular expression
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Validate phone number using a regular expression
    const phonePattern = /^(\+\d{1,3}[- ]?)?\d{10}$/;
    if (!phonePattern.test(phone)) {
      alert("Please enter a valid phone number (digits only).");
      return;
    }
    let temp = generateString(membershipType);
    let newmember = {
      id: temp,
      name: name,
      email: email,
      phone: phone,
      membershipType: membershipType,
    };
    sendEmail(name, temp, membershipType, email);
    fetch("	https://sheetdb.io/api/v1/4lgygrwfo2lz4", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: newmember,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.error("Error storing data:", error));
    // Form submission logic
    console.log("Form submitted!");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Membership Type:", membershipType);

    setName("");
    setEmail("");
    setPhone("");
    setMembershipType("basic");
  };

  const selectedMembership = memberships.find(
    (membership) => membership.title.toLowerCase() === membershipType
  );

  return (
    <div className="join-page-form">
      <form onSubmit={handleSubmit} className="join-form">
        <h1>Join Now</h1>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="membershipType">Membership Type:</label>
          <select
            id="membershipType"
            value={membershipType}
            onChange={(e) => setMembershipType(e.target.value)}
          >
            <option value="basic">Basic</option>
            <option value="premium">Premium</option>
            <option value="vip">VIP</option>
          </select>
        </div>
        <button type="submit">Pay Now</button>
      </form>
      <div className="membership-details">
        {selectedMembership && (
          <div className="details">
            <h2>{selectedMembership.title} Membership Details</h2>
            <p>{selectedMembership.description}</p>
            <h3>Facilities:</h3>
            <ul>
              {Object.keys(selectedMembership.facilities).map(
                (facility, index) => (
                  <li key={index}>
                    {facility}:{" "}
                    {selectedMembership.facilities[facility] ? (
                      <FaCheck className="check-icon" />
                    ) : (
                      <FaTimes className="cross-icon" />
                    )}
                  </li>
                )
              )}
            </ul>
            <p>Price: {selectedMembership.price}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default JoinFormMember;