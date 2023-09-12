import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./styles/MemberContact.css";

function MemberContact() {
  const [name, setName] = useState("");
  const [id, setID] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    if (name != "" && id != "" && email != "" && message != "") {
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
      let domain = "https://sheetdb.io/api/v1/4lgygrwfo2lz4/search?id=" + id;
      fetch(domain)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data[0].name == name && data[0].email == email) {
            emailjs
              .send(serviceID, templateID1, { name, email, message }, userID)
              .then(() => {
                console.log("Email sent successfully");
              })
              .catch((error) => {
                console.error("Email error:", error);
              });
            emailjs
              .send(serviceID, templateID2, { name, email, message }, userID)
              .then(() => {
                console.log("Email sent successfully");
                setName("");
                setID("");
                setEmail("");
                setMessage("");
              })
              .catch((error) => {
                console.error("Email error:", error);
              });
          } else {
            alert("The Given Name/ID/Email is Not valid");
          }
        });
    } else if (name == "") {
      alert("Please Enter Your Full Name");
    } else if (id == "") {
      alert("Please enter a Valid Student Id");
    } else if (email == "") {
      alert("Please Enter A Valid E-mail Address");
    } else if (message == "") {
      alert("please write something in the textarea");
    }
  };

  return (
    <div className="member-contact-us-container">
      <h1>Member Enquiry Only</h1>
      <p>
        If you have any questions or enquiries, feel free to reach out to us!
      </p>
      <p>
        Members Only(Question asked here will not be public or known to anyother
        person)
      </p>
      <form className="member-contact-form" onSubmit={sendEmail}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Your ID"
          value={id}
          onChange={(e) => setID(e.target.value)}
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Your Message/Question"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default MemberContact;
