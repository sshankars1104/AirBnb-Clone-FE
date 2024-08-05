import React from "react";
import "./PageNotFound.css";

const PageNotFound = () => {
  return (
    <div className="PageNotFound-container">
      <div className="PageNotFound-content">
        <h1>404</h1>
        <p>Oops! The page you’re looking for doesn’t exist.</p>
        <a href="/" className="home-link">
          Go to Homepage
        </a>
      </div>
    </div>
  );
};

export default PageNotFound;
