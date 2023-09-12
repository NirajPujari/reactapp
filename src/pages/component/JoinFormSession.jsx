import React, { useState } from "react";
import "./styles/JoinFormSession.css";
import emailjs from "emailjs-com";

const JoinFormSession = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [sessionType, setSessionType] = useState(null);

  function generateString(type) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let result = "";
    let number = "456";
    let random = number.charAt(Math.floor(Math.random() * 3));
    for (let i = 0; i < random; i++) {
      result += characters.charAt(Math.floor(Math.random() * 59));
    }
    switch (type) {
      case "strength-training":
        result += "1";
        break;
      case "calisthenics":
        result += "2";
        break;
      case "group-fitness-classes":
        result += "3";
        break;
      case "cardio":
        result += "4";
        break;
      case "swimming-pool":
        result += "5";
        break;
      case "sauna-steam-room":
        result += "6";
        break;
      case "yoga":
        result += "7";
        break;
      case "personal-training":
        result += "8";
    }
    for (let i = 0; i < random; i++) {
      result += characters.charAt(Math.floor(Math.random() * 59));
    }

    return result;
  }
  const sendEmail = (name, id, sessionType, email) => {
    // Replace these with your own Email.js service ID, template ID, and user ID
    const serviceID = "service_3nb1e9i";
    const templateID = "template_e871doy";
    const userID = "c8ffsL4LaXZ0IefY0";

    emailjs
      .send(serviceID, templateID, { name, id, sessionType, email }, userID)
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
    let temp = generateString(sessionType);
    let newsession = {
      id: temp,
      name: name,
      email: email,
      phone: phone,
      sessionType: sessionType,
    };

    sendEmail(name, temp, sessionType, email);
    fetch("https://sheetdb.io/api/v1/246m1gwqjxj0w", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: newsession,
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
    console.log("Session Type:", sessionType);

    setName("");
    setEmail("");
    setPhone("");
    setSessionType("strength-training");
  };

  return (
    <div className="join-session-form">
      <form onSubmit={handleSubmit} className="join-session">
        <h1>Join a Session</h1>
        <div className="form-session">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-session">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-session">
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="form-session">
          <label htmlFor="sessionType">Session Type:</label>
          <select
            id="sessionType"
            value={sessionType}
            onChange={(e) => setSessionType(e.target.value)}
          >
            <option value="strength-training">
              Strength Training &rArr; $4.99/hr
            </option>
            <option value="calisthenics">Calisthenics &rArr; $4.99/hr</option>
            <option value="group-fitness-classes">
              Group Fitness Classes &rArr; $7.99/hr
            </option>
            <option value="cardio">Cardio &rArr; $4.99/hr</option>
            <option value="swimming-pool">Swimming Pool &rArr; $9.99/hr</option>
            <option value="sauna-steam-room">
              Sauna Steam Room &rArr; $9.99/hr
            </option>
            <option value="yoga">Yoga &rArr; $4.99/hr</option>
            <option value="personal-training">
              Personal Training &rArr; $14.99/hr
            </option>
          </select>
        </div>
        <button type="submit">Join Now</button>
      </form>
    </div>
  );
};

export default JoinFormSession;