import React from 'react';
import './Header.css';
import logo from '../img/logo.png';

const Header = () => {
  return (
    <header className="main-header">
      <div className="header-content">
        <div className="logo-container">
          <img src={logo} alt="ArtFlick Logo" className="header-logo" />
        </div>
      </div>
    </header>
  );
};

export default Header; 