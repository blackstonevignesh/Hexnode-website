import React from 'react';
import './CenteredImageSection.css'; // Separate CSS file for styling
import centeredImage from '../assets/android-devices.webp'; // Replace with your image path

const CenteredImageSection = () => {
  return (
    <section className="centered-section">
      <div className="centered-content">
        <img src={centeredImage} alt="Centered Display" className="centered-image" />
        <h2 className="section-header">Phones, TVs and Wearables. All from a single point.</h2>
        <p className="section-paragraph">
          The Unified Endpoint Management (UEM) Software from Hexnode simplifies mangement of all 
          sorts of Android endpoints,ranging from mobile phones to XR devices, and unlocks countless
        <br />
          endpoint mangement capailities
        </p>
      </div>
    </section>
  );
};

export default CenteredImageSection;
