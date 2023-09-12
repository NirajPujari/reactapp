import React from "react";
import { Link } from "react-router-dom";
import "./component/styles/JoinForm.css";

function Join() {
  return (
    <div className="join-page">
      <div className="types">
        <h1>Unlock Your Fitness Journey: Join Us Today</h1>
        <div className="page-links">
          <Link to="/home/join/member">Memberships</Link>
          <Link to="/home/join/session">Sessions</Link>
        </div>
      </div>
    </div>
  );
}

export default Join;