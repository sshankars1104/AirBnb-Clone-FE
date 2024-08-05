import React from "react";
import { useNavigate } from "react-router-dom";
import "./Help.css";

const Help = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div className="help-container">
      <div className="help-content">
        <button className="back-button" onClick={handleBackToHome}>
          Back to Home
        </button>
        <h1>Hi, how can we help?</h1>
        <input type="text" placeholder="Search..." className="search-bar" />
      </div>
    </div>
  );
};

export default Help;
