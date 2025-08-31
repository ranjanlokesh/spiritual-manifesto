import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>🌌 Conscious Evolution</h1>
        <p className="navbar-tagline">
          A Journey Beyond Time — Spiritual Awareness with AI Reflection
        </p>
      </div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About It</a></li>
        <li><a href="#resources">Resources</a></li>
        <li>
          <a
            href="https://copilot.microsoft.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Talk to AI
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;