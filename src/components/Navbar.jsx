import React, { useState } from "react";
import "../styles/Navbar.css"; // Ensure you have the CSS file

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">Portfolio</h1>
        <button className="burger-menu" onClick={toggleMenu} aria-label="Toggle menu">
          <span className="burger-bar"></span>
          <span className="burger-bar"></span>
          <span className="burger-bar"></span>
        </button>
      </div>
      <ul className={`navbar-links ${isMenuOpen ? "show-menu" : ""}`}>
        <li><a href="#hero">Home</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
