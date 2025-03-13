import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>ArtFlick</h4>
          <p>A platform for artists to showcase their work and connect with art enthusiasts.</p>
        </div>
        <div className="footer-section">
          <h4>Links</h4>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/terms">Terms of Service</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Connect</h4>
          <div className="social-icons">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-instagram"></i></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-twitter"></i></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-facebook"></i></a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-pinterest"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} ArtFlick. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 