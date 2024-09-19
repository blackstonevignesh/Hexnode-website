import React from 'react';
import './AndroidFleetSection.css';
import androidFleetImg from '../assets/device-owner.webp'; // Replace with the actual path

const AndroidFleetSection = () => {
  return (
    <section className="android-fleet-section">
      {/* Header */}
      <div className="section-header">
        <h2>Explore diverse ownership setups for your Android fleet</h2>
      </div>

      {/* Content Area */}
      <div className="content-container">
        {/* Left: Image */}
        <div className="image-container">
          <img src={androidFleetImg} alt="Android Fleet" />
        </div>

        {/* Right: Text Content */}
        <div className="text-content">
          <div className="main-content">
            <h3>Device Owner</h3>
            <p>
              Device Owner mode in Hexnode refers to an Android Enterprise enrollment configuration designed for Corporate Owned devices, allowing IT admins to exert firm control over the devices. It provides comprehensive device management capabilities, empowering admins to customize lock screens, manage networks, apply app restrictions, and configure kiosk settings.
            </p>
          </div>
          <div className="sub-content">
            <h4>Profile Owner</h4>
            <h4>Work Profile on Company-Owned devices (WP-C)</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AndroidFleetSection;
