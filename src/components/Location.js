import React from 'react';
import hexconImage from '../assets/download.png';
import facebookIcon from '../assets/facebook.png';
import linkedinIcon from '../assets/linkedin.png';
import twitterIcon from '../assets/twitter.png';
import youtubeIcon from '../assets/youtube.png';
import './Location.css';

const Location = () => {
  return (
    <div className="footer-container">
      <div className="footer-bottom">
        {/* Hexnode Section */}
        <div className="footer-section">
          <h3>hexnode</h3>
          <ul>
            <li><a href="#">Hexnode UEM</a></li>
            <li><a href="#">Hexnode Kiosk Lockdown</a></li>
            <li><a href="#">Hexnode Secure Browser</a></li>
            <li><a href="#">Hexnode Digital Signage</a></li>
            <li><a href="#">Hexnode Do</a></li>
          </ul>
        </div>

        {/* Capabilities Section */}
        <div className="footer-section">
          <h3>Capabilities</h3>
          <ul>
            <li><a href="#">Device Management</a></li>
            <li><a href="#">Kiosk Lockdown</a></li>
            <li><a href="#">Compliance & Security</a></li>
            <li><a href="#">Supported Platforms</a></li>
            <li><a href="#">Enterprise Integrations</a></li>
            <li><a href="#">Industry</a></li>
          </ul>
        </div>

        {/* Product Section */}
        <div className="footer-section">
          <h3>Product</h3>
          <ul>
            <li><a href="#">All Features</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Customers</a></li>
            <li><a href="#">Customer Stories</a></li>
            <li><a href="#">Resources</a></li>
            <li><a href="#">Webinar</a></li>
          </ul>
        </div>

        {/* Sales & Support Section */}
        <div className="footer-section">
          <h3>Sales & Support</h3>
          <ul>
            <li><a href="#">US Toll-Free: +1-833-HEXNODE</a></li>
            <li><a href="#">UK Toll-Free: +44-8003-689920</a></li>
            <li><a href="#">AU Toll-Free: +61-1800-165-939</a></li>
            <li><a href="#">NZ Direct: +64-9-8842599</a></li>
            <li><a href="#">CH Direct: +41-44-798-2244</a></li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <ul>
            <li><a href="#">Talk to Sales/Support</a></li>
            <li><a href="#">Schedule a Demo</a></li>
            <li><a href="#">Watch a Demo</a></li>
            <li><a href="#">Get a Quote</a></li>
            <li><a href="#">Raise a Ticket</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section with Images and Social Links */}
      <div className="footer-images">
        <div className="hexcon-image">
          <img src={hexconImage} alt="HexCon Event" />
          <p>Hexnode's annual user conference is coming back this year!</p>
          <a href="#">REGISTER NOW</a>
        </div>
        <div className="social-icons">
          <a href="#"><img src={facebookIcon} alt="Facebook" /></a>
          <a href="#"><img src={linkedinIcon} alt="LinkedIn" /></a>
          <a href="#"><img src={twitterIcon} alt="Twitter" /></a>
          <a href="#"><img src={youtubeIcon} alt="YouTube" /></a>
        </div>
      </div>
    </div>
  );
};

export default Location;
