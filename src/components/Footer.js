import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="left">
          <ul>
            <li><a href="#terms">Terms of Use</a></li>
            <li><a href="#privacy">Privacy</a></li>
            <li><a href="#contact">Cookies</a></li>
          </ul>
        </div>
        <div className="right">
          <p>Copyright © {new Date().getFullYear()} Mitsogo Inc.All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
