import React from 'react';
import './App.css';
import logo from './img/logo.png';

function App() {
  return (
    <div className="app">
      <header className="header">
        <img src={logo} alt="ArtFlick Logo" className="logo" />
      </header>
      <main>
        <h1>Welcome to ArtFlick</h1>
        <p>Your Art Discovery Platform</p>
      </main>
    </div>
  );
}

export default App;
