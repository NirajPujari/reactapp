import React from "react";
import "./component/styles/TermsPage.css";
import { Link } from "react-router-dom"; // Import Link component

function TermsConditions() {
  return (
    <div className="body">
      <div className="terms">
        <h1>Terms & Conditions</h1>
        <div className="page-links">
          <Link to="/home/terms/website">Terms & Conditions - Website</Link>
          <Link to="/home/terms/member">Terms & Conditions - Members</Link>
          <Link to="/home/terms/labor">Labour Compliance Documents</Link>
        </div>
      </div>
    </div>
  );
}

export default TermsConditions;