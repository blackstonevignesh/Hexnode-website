import React from 'react';
import './NewSection.css'; // Assuming you're using a separate CSS file for this new section
import gartnerImageSrc from '../assets/gartner-logo.png'; // Replace with your image paths
import forresterImageSrc from '../assets/forrester-logo.png'; // Replace with your image paths

const NewSection = () => {
  return (
    <section className="new-section">
    <div className="new-section-content">
      <div className="text-content">
        <h2>Loved by all.
        <br />Recognized by the best.
        </h2>
      </div>
        <div className="image-container">
          <div className="image-box">
          <img src={gartnerImageSrc} alt="Gartner" className="gartner-image" />
            <p>Hexnode mentioned as a notable vendor
            <br />in Midmarket Context: Magic Quadrant for
            <br />Unified Endpoint Management tools 2022.
            </p>
          </div>
          <div className="image-box">
          <img src={forresterImageSrc} alt="Forrester" className="forrester-image" />
          <p>Forrester includes Hexnode as a Notable
            <br />vendor in the Unified Endpoint
            <br />Management Landscape, Q3 2023.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewSection;
