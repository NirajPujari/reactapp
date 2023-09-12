import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./styles/ContactPage.css";

function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    if (name != "" && email != "" && message != "") {
      // Replace these with your own Email.js service ID, template ID, and user ID
      const serviceID = "service_a1o5r4p";
      const templateID1 = "template_a1a129o";
      const templateID2 = "template_q2se14e";
      const userID = "8aeEp21WK3TZnh-rM";

      // Validate email using a regular expression
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }
      emailjs
        .send(serviceID, templateID1, { name, email, message }, userID)
        .then(() => {
          console.log("Email sent successfully");
          // Reset form fields after sending
          setName("");
          setEmail("");
          setMessage("");
        })
        .catch((error) => {
          console.error("Email error:", error);
        });
      emailjs
        .send(serviceID, templateID2, { name, email, message }, userID)
        .then(() => {
          console.log("Email sent successfully");
          setName("");
          setEmail("");
          setMessage("");
        })
        .catch((error) => {
          console.error("Email error:", error);
        });
    } else if (name == "") {
      alert("Please Enter Your Full Name");
    } else if (email == "") {
      alert("Please Enter A Valid E-mail Address");
    } else if (message == "") {
      alert("please write something in the textarea");
    }
  };

  return (
    <div className="contact-us-container">
      <h1>Contact Us</h1>
      <p className="contact-us-text">
        If you have any questions or inquiries, feel free to reach out to us!
      </p>
      <form className="contact-form" onSubmit={sendEmail}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default ContactUs;
