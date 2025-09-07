import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showHomeDropdown, setShowHomeDropdown] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>🌌 Conscious Evolution</h1>
        <p className="navbar-tagline">
          A Journey Beyond Time — Spiritual Awareness with AI Reflection
        </p>
      </div>

      <ul className="navbar-links">
        {/* Home Dropdown */}
        <li
          className="dropdown"
          onMouseEnter={() => setShowHomeDropdown(true)}
          onMouseLeave={() => setShowHomeDropdown(false)}
        >
          <Link to="/">Home ▾</Link>
          {showHomeDropdown && (
            <ul className="dropdown-menu">
              <li><a href="#about">About It</a></li>
              <li><a href="#resources">Resources</a></li>
            </ul>
          )}
        </li>

        {/* Direct Navigation */}
        <li><Link to="/reflections">Reflections</Link></li>
        <li><Link to="/archive">Living Archive</Link></li>

        {/* External AI Link */}
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