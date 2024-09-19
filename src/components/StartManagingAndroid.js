import React from 'react';
import './StartManagingAndroid.css';

const StartManagingSection = () => {
  return (
    <section className="start-managing-section">
      {/* Header */}
      <h2>Android management, made easy!</h2>

      {/* Input and Buttons */}
      <div className="input-container">
        <input type="email" placeholder="Your Work Email" />
        <button className="get-started-btn">GET STARTED</button>
      </div>

      {/* Additional Text */}
      <p className="subtext">
        No credit cards required. <a href="#">Request a demo</a>
      </p>
    </section>
  );
};

export default StartManagingSection;
