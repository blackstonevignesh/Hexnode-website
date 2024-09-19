import React, { useState } from 'react';
import './ImageContentSection.css';
import preArrow from '../assets/pre-arrow-icon.svg';
import nextArrow from '../assets/next-arrow-icon.svg';

// Import images directly at the top
import image1 from '../assets/justin-modrak.webp';
import image2 from '../assets/dalibor-kruljac.webp';
import image3 from '../assets/tom-morrison.webp';

// Example data with imported image sources
const sectionData = [
  {
    imageSrc: image1,
    contentHeader: 'Justin Modrak',
    contentText: 'Technology Coordinator.',
  },
  {
    imageSrc: image2,
    contentHeader: 'Dalibor Kruljac',
    contentText: 'KAMALEYA LTD.',
  },
  {
    imageSrc: image3,
    contentHeader: 'Tom Morrison',
    contentText: 'Executive Account Manager,NCS.',
  },
];

const ImageContentSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sectionData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sectionData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="section-container">
      <div className="image-content-wrapper">
        {/* Image on the left */}
        <div className="image-wrapper">
          <img src={sectionData[currentIndex].imageSrc} alt="content" />
        </div>

        {/* Content on the right */}
        <div className="content-wrapper">
          <h2>{sectionData[currentIndex].contentHeader}</h2>
          <p>{sectionData[currentIndex].contentText}</p>
        </div>
      </div>

      {/* Arrow buttons below content */}
      <div className="arrow-buttons">
        <button className="arrow-button" onClick={handlePrev}>
          <img src={preArrow} alt="Previous" className="arrow-icon" />
        </button>
        <button className="arrow-button" onClick={handleNext}>
          <img src={nextArrow} alt="Next" className="arrow-icon" />
        </button>
      </div>

      {/* Section after image-content */}
      <div className="below-section">
        <h3>Easy integration</h3>
        <p>
          Hexnode provides support for an ever-growing list of integrations to help you leverage the features of your pre-existing resources.
        </p>
      </div>
    </div>
  );
};


export default ImageContentSection;
