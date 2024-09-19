import React from 'react';
import './Header.css';
import logo from '../assets/download.png'; // Adjust path as needed
import '@fortawesome/fontawesome-free/css/all.css';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <div className="left-side">
          <img src={logo} alt="Hexnode Logo" className="logo" />
          <ul>
            <li><a href="#features">Features <i className="fas fa-chevron-down"></i></a></li>
            <li><a href="#capabilities">Capabilities <i className="fas fa-chevron-down"></i></a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#customers">Customers</a></li>
            <li><a href="#partners">Partners <i className="fas fa-chevron-down"></i></a></li>
            <li><a href="#support">Support <i className="fas fa-chevron-down"></i></a></li>
          </ul>
        </div>
        <div className="right-side">
          <ul className="extra-links">
            <li><a href="#whats-new">What's new</a></li>
            <li><a href="#demo">Demo <i className="fas fa-chevron-down"></i></a></li>
            <li><a href="#contact-sales">Contact Sales</a></li>
            <li className="phone-number">+1-833-439-6633</li>
          </ul>
          <button className="trial-button">14 DAY FREE TRIAL</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
