// src/components/ContactSection.js
import React from "react";
import "./styles/ContactSection.css";
import { Link } from "react-router-dom";

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="contact-content">
        <ul className="list">
          <li className="header-list">Membership</li>
          <Link to="/home/membershipform" className="topic-list">
            <li>Membership options</li>
          </Link>
          <Link to="/home/faq" className="topic-list">
            <li>Frequently asked questions</li>
          </Link>
        </ul>
        <ul className="list">
          <li className="header-list">Policies & legel</li>
          <Link to="/home/policy" className="topic-list">
            <li>Privacy policy</li>
          </Link>
          <Link to="/home/terms" className="topic-list">
            <li>Terms & Conditions </li>
          </Link>
        </ul>
        <ul className="list">
          <li className="header-list">Customer Services</li>
          <Link to="/home/contact" className="topic-list">
            <li>Contact us</li>
          </Link>
          <Link to="/home/membercontact" className="topic-list">
            <li>Member's Enquiry</li>
          </Link>
          <Link to="/home/faq" className="topic-list">
            <li>FAQs</li>
          </Link>
        </ul>
      </div>
    </section>
  );
};

export default ContactSection;