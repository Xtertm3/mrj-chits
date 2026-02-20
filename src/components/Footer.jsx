import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">MRJ Chits Pvt Ltd</h3>
            <p className="footer-text">
              Trusted chit fund services with over 6000 happy customers. 
              Building long-term relationships since inception.
            </p>
            <div className="social-links">
              <a href="#" className="social-icon" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" className="social-icon" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" className="social-icon" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" className="social-icon" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/schemes">Chit Schemes</Link></li>
              <li><Link to="/team">Our Team</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Our Services</h4>
            <ul className="footer-links">
              <li><Link to="/schemes">Mid-Term Plans</Link></li>
              <li><Link to="/schemes">Long-Term Plans</Link></li>
              <li><Link to="/payments">Online Payments</Link></li>
              <li><Link to="/testimonials">Customer Reviews</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Contact Info</h4>
            <ul className="footer-contact">
              <li>
                <FaMapMarkerAlt />
                <span>#75 Banashankari Market Avenue Road Cross, Devara Dasimaiah Road, Bangalore - 560 002</span>
              </li>
              <li>
                <FaPhone />
                <span>080 22215473 | 080 22217639 | 9986277180 | 9448168227</span>
              </li>
              <li>
                <FaEnvelope />
                <span>info@mrjchits.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} MRJ Chits Pvt Ltd. All rights reserved.</p>
          <p>Regulated by the Registrar of Chits, Government of Karnataka</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
