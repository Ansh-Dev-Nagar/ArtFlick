import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);
  const [activeItem, setActiveItem] = useState('home');

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <nav className={`navbar ${expanded ? 'expanded' : 'collapsed'}`} 
         onMouseEnter={() => setExpanded(true)} 
         onMouseLeave={() => setExpanded(false)}>
      <ul className="navbar-menu">
        <li 
          className={`navbar-item ${activeItem === 'home' ? 'active' : ''}`}
          onClick={() => handleItemClick('home')}
        >
          <div className="navbar-icon">
            <i className="fas fa-home"></i>
          </div>
          <span className="navbar-label">Home</span>
        </li>
        <li 
          className={`navbar-item ${activeItem === 'search' ? 'active' : ''}`}
          onClick={() => handleItemClick('search')}
        >
          <div className="navbar-icon">
            <i className="fas fa-search"></i>
          </div>
          <span className="navbar-label">Search</span>
        </li>
        <li 
          className={`navbar-item ${activeItem === 'explore' ? 'active' : ''}`}
          onClick={() => handleItemClick('explore')}
        >
          <div className="navbar-icon">
            <i className="fas fa-image"></i>
          </div>
          <span className="navbar-label">Explore</span>
        </li>
        <li 
          className={`navbar-item ${activeItem === 'upload' ? 'active' : ''}`}
          onClick={() => handleItemClick('upload')}
        >
          <div className="navbar-icon">
            <i className="fas fa-upload"></i>
          </div>
          <span className="navbar-label">Upload</span>
        </li>
        <li 
          className={`navbar-item ${activeItem === 'favorites' ? 'active' : ''}`}
          onClick={() => handleItemClick('favorites')}
        >
          <div className="navbar-icon">
            <i className="fas fa-heart"></i>
          </div>
          <span className="navbar-label">Favorites</span>
        </li>
        <li 
          className={`navbar-item ${activeItem === 'profile' ? 'active' : ''}`}
          onClick={() => handleItemClick('profile')}
        >
          <div className="navbar-icon">
            <i className="fas fa-user"></i>
          </div>
          <span className="navbar-label">Profile</span>
        </li>
      </ul>
      
      <div className="navbar-auth">
        <button className={`auth-button ${expanded ? 'expanded' : ''}`}>
          <div className="navbar-icon">
            <i className="fas fa-sign-in-alt"></i>
          </div>
          {expanded && <span className="navbar-label">Sign In</span>}
        </button>
        <button className={`auth-button primary ${expanded ? 'expanded' : ''}`}>
          <div className="navbar-icon">
            <i className="fas fa-user-plus"></i>
          </div>
          {expanded && <span className="navbar-label">Sign Up</span>}
        </button>
      </div>
    </nav>
  );
};

export default Navbar; 