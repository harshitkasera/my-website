import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">HK Digital</div>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#demo">Demo</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;