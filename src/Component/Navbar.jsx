import React, { useState } from "react";
import { Sparkles, Menu, X, ArrowUpRight, MessageSquare } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <a href="#home" className="logo-container">
        <div className="logo-icon">
          <Sparkles size={20} />
        </div>
        <div className="logo-text">
          HKify <span>Web Studio</span>
        </div>
      </a>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#client-work" onClick={() => setMenuOpen(false)}>Client Work</a>
        <a href="#why-us" onClick={() => setMenuOpen(false)}>Why Us</a>
        <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
        <a href="#pricing" onClick={() => setMenuOpen(false)}>Growth Plans</a>
        <a href="#demo" onClick={() => setMenuOpen(false)}>Live Demos</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
      </div>

      <div className="nav-cta">
        <a
          href="https://wa.me/919302252353?text=Hi%20HK%20Digital,%20I%20want%20to%20discuss%20growing%20my%20business"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary nav-btn"
        >
          <MessageSquare size={16} />
          Book Strategy Call
          <ArrowUpRight size={16} />
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;