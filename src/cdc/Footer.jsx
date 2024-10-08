import React from 'react';
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>We are dedicated to providing the best placement opportunities for students at IIT Jodhpur.</p>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: placement@iitj.ac.in</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <a href="https://www.instagram.com/cdc_iitj/">Instagram</a>
          <a href="https://www.facebook.com/SPC.IITJ/">Facebook</a>
          <a href="https://www.linkedin.com/company/cdc-iit-jodhpur/?originalSubdomain=in">LinkedIn</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; TPO IIT Jodhpur. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
