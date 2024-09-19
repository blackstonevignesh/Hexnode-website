import React from 'react';
import './Section.css'; // Assuming you're using a separate CSS file for the section
import androidWorkApp from '../assets/android-work-app.webp'; // Replace with the correct path to your image
import androidSilverBadge from '../assets/android-silver-badge.svg'; // Replace with the correct path to your image

const Section = () => {
  return (
    <section className="section">
      <div className="text-content">
        <h1>Seamless Android device management at your fingertips.</h1>
        <div className="section-buttons">
          <input
            type="email"
            className="email-input"
            placeholder="Your Work Email"
          />
          <input
            type="button"
            className="get-started-button"
            value="GET STARTED"
          />
        </div>
        <img 
          src={androidSilverBadge} 
          alt="Android Silver Badge" 
          className="silver-badge" 
        />
      </div>
      <img 
        src={androidWorkApp} 
        alt="Device Management" 
        className="work-app-image" 
      />
    </section>
  );
};

export default Section;
