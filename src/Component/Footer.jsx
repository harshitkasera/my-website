import React from "react";
import { Sparkles, Phone, Mail, MapPin, MessageSquare, ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-grid">

        {/* BRAND COL */}
        <div className="footer-col">
          <a href="#home" className="logo-container" style={{ textDecoration: 'none' }}>
            <div className="logo-icon">
              <Sparkles size={20} />
            </div>
            <div className="logo-text">
              HKify <span>Web Studio</span>
            </div>
          </a>
          <p>
            Premium Website Development, High-Converting Landing Pages & Meta Lead Generation Systems for Local Businesses & Clinics.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-col">
          <h4 className="footer-title">Navigation</h4>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#why-us">Why Choose Us</a></li>
            <li><a href="#services">Our Services</a></li>
            <li><a href="#pricing">Growth Plans</a></li>
            <li><a href="#demo">Live Demos</a></li>
          </ul>
        </div>

        {/* SERVICES */}
        <div className="footer-col">
          <h4 className="footer-title">Services</h4>
          <ul className="footer-links">
            <li><a href="#services">Website Development</a></li>
            <li><a href="#services">Meta Ads System</a></li>
            <li><a href="#services">Landing Pages</a></li>
            <li><a href="#services">WhatsApp Funnels</a></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-col">
          <h4 className="footer-title">Contact Us</h4>
          <ul className="footer-links">
            <li>
              <a href="tel:+919302252353" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <Phone size={15} /> +91 9302252353
              </a>
            </li>
            <li>
              <a href="mailto:harshitkasera01@gmail.com" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <Mail size={15} /> harshitkasera01@gmail.com
              </a>
            </li>
            <li>
              <span style={{ color: '#94a3b8', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <MapPin size={15} /> Shajapur (M.P.), India
              </span>
            </li>
            <li style={{ marginTop: '10px' }}>
              <a
                href="https://www.instagram.com/_kasera_h353/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#e1306c', fontWeight: '600', textDecoration: 'none' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                @_kasera_h353 <ArrowUpRight size={14} />
              </a>
            </li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <div>© 2026 HK Digital. All Rights Reserved.</div>
        <div>Crafted for Maximum Conversion & Business Growth</div>
      </div>
    </footer>
  );
};

export default Footer;