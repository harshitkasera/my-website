import React from "react";
import {
  Sparkles,
  Zap,
  Target,
  MessageSquare,
  ShieldCheck,
  Rocket,
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Flame,
  Award,
  Clock,
  TrendingUp,
  Star,
  Quote
} from "lucide-react";

const Home = () => {
  return (
    <div className="home-wrapper">

      {/* HERO SECTION */}
      <section className="hero" id="home">
        <div className="badge-tag">
          <Flame size={16} />Growth System for Local Businesses
        </div>

        <h1>
          We Help Clinics & Local Businesses Generate<br />
          <span className="gradient-highlight">30–100 Qualified Leads</span> Per Month
        </h1>

        <p>
          Turn casual visitors into loyal, high-paying clients with our high-converting
          websites, automated WhatsApp funnels & targeted Meta Ads systems.
        </p>

        <div className="hero-buttons">
          <a
            href="https://wa.me/919302252353?text=Hi%20HK%20Digital,%20I%20want%20to%20book%20a%20free%2015-minute%20growth%20call"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <MessageSquare size={18} />
            Book Free 15-Min Strategy Call
          </a>

          <a href="#services" className="btn-secondary">
            Explore Our Services <ArrowRight size={18} />
          </a>
        </div>

        {/* HERO STATS COUNTER BAR */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number">30–100</div>
            <div className="stat-label">Qualified Leads / Mo</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">7 Days</div>
            <div className="stat-label">Rapid Delivery</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">4.9 ★</div>
            <div className="stat-label">Client Satisfaction</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">100%</div>
            <div className="stat-label">ROI-Driven Design</div>
          </div>
        </div>
      </section>

      {/* CLIENT WORK & TESTIMONIALS SECTION */}
      <section id="client-work" className="client-work-section">
        <div className="section-header-center">
          <div className="badge-tag">
            <Star size={16} fill="currentColor" /> Client Portfolio & Verified Reviews
          </div>
          <h2>Client Work & Real Feedback</h2>
          <p className="section-subtitle">
            Take a look at the custom websites and lead generation funnels we've delivered for our clients, along with their real growth feedback.
          </p>
        </div>

        {/* TRUST HIGHLIGHT BAR */}
        <div className="client-stats-bar">
          <div className="client-stat-item">
            <span className="stat-value">25+</span>
            <span className="stat-desc">Websites Delivered</span>
          </div>
          <div className="stat-divider"></div>
          <div className="client-stat-item">
            <span className="stat-value">4.9 ★★★★★</span>
            <span className="stat-desc">Client Satisfaction Rating</span>
          </div>
          <div className="stat-divider"></div>
          <div className="client-stat-item">
            <span className="stat-value">100%</span>
            <span className="stat-desc">WhatsApp Lead Capture</span>
          </div>
        </div>

        {/* CLIENT CARDS GRID */}
        <div className="client-work-grid">

          {/* CARD 1 */}
          <div className="glass-card client-card">
            <div className="client-card-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1629909615184-74f495363b67?w=600&auto=format&fit=crop&q=80"
                alt="Sanjeevani Dental Clinic Website"
                className="client-card-img"
              />
              <span className="industry-badge">Healthcare & Clinic</span>
              <span className="result-chip">🔥 +120% Patient Inquiries</span>
            </div>

            <div className="client-card-body">
              <div className="client-rating">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
                ))}
                <span className="rating-text">5.0 Verified Feedback</span>
              </div>

              <h3 className="client-biz-title">Sanjeevani Dental & Care Clinic</h3>
              <p className="client-biz-location">Indore, Madhya Pradesh</p>

              <div className="testimonial-box">
                <Quote size={24} className="quote-icon" />
                <p className="testimonial-text">
                  "Harshit built an amazingly fast and modern website for our dental clinic with direct WhatsApp appointment booking. Within 30 days of launch, our patient appointments increased by over 120%! Exceptional work and super quick delivery."
                </p>
              </div>

              <div className="client-info-author">
                <div className="author-avatar">DS</div>
                <div>
                  <h4 className="author-name">Dr. Ananya Sharma</h4>
                  <p className="author-role">Founder & Chief Dentist</p>
                </div>
              </div>

              <div className="project-tags">
                <span className="tag-pill"><CheckCircle2 size={13} /> Direct WhatsApp Booking</span>
                <span className="tag-pill"><CheckCircle2 size={13} /> Mobile Responsive</span>
                <span className="tag-pill"><CheckCircle2 size={13} /> SEO & Google Maps</span>
              </div>

              <a
                href="https://wa.me/919302252353?text=Hi%20HK%20Studio,%20I%20saw%20Sanjeevani%20Dental%20Clinic%20website%20work%20and%20want%20a%20similar%20website%20for%20my%20clinic"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary work-cta-btn"
              >
                Get Similar Clinic Website <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="glass-card client-card">
            <div className="client-card-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&auto=format&fit=crop&q=80"
                alt="Apex Fitness & Gym Website"
                className="client-card-img"
              />
              <span className="industry-badge">Fitness & Wellness</span>
              <span className="result-chip">🚀 65+ Monthly Gym Leads</span>
            </div>

            <div className="client-card-body">
              <div className="client-rating">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
                ))}
                <span className="rating-text">5.0 Verified Feedback</span>
              </div>

              <h3 className="client-biz-title">Apex Power Fitness Gym</h3>
              <p className="client-biz-location">Bhopal, Madhya Pradesh</p>

              <div className="testimonial-box">
                <Quote size={24} className="quote-icon" />
                <p className="testimonial-text">
                  "The landing page and Meta ads lead system designed by HK Web Studio brought us 65+ verified fitness membership leads in our very first month. Highly recommended for any gym owner looking for genuine growth."
                </p>
              </div>

              <div className="client-info-author">
                <div className="author-avatar">RM</div>
                <div>
                  <h4 className="author-name">Rahul Malviya</h4>
                  <p className="author-role">Owner & Master Trainer</p>
                </div>
              </div>

              <div className="project-tags">
                <span className="tag-pill"><CheckCircle2 size={13} /> High-Converting Landing Page</span>
                <span className="tag-pill"><CheckCircle2 size={13} /> Meta Ad System</span>
                <span className="tag-pill"><CheckCircle2 size={13} /> Instant Lead Alerts</span>
              </div>

              <a
                href="https://wa.me/919302252353?text=Hi%20HK%20Studio,%20I%20saw%20Apex%20Fitness%20Gym%20work%20and%20want%20a%20lead%20generation%20website"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary work-cta-btn"
              >
                Get Gym Growth Funnel <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="glass-card client-card">
            <div className="client-card-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&auto=format&fit=crop&q=80"
                alt="Royal Spice Dining Website"
                className="client-card-img"
              />
              <span className="industry-badge">Restaurant & Hospitality</span>
              <span className="result-chip">⭐ 3x Table Reservations</span>
            </div>

            <div className="client-card-body">
              <div className="client-rating">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
                ))}
                <span className="rating-text">5.0 Verified Feedback</span>
              </div>

              <h3 className="client-biz-title">Royal Spice Fine Dining</h3>
              <p className="client-biz-location">Ujjain, Madhya Pradesh</p>

              <div className="testimonial-box">
                <Quote size={24} className="quote-icon" />
                <p className="testimonial-text">
                  "Our online digital menu and table reservation site is running smoothly. Customers love browsing our dishes online and reserving tables directly on WhatsApp. Our weekend bookings tripled!"
                </p>
              </div>

              <div className="client-info-author">
                <div className="author-avatar">VS</div>
                <div>
                  <h4 className="author-name">Vikramaditya Singh</h4>
                  <p className="author-role">General Manager</p>
                </div>
              </div>

              <div className="project-tags">
                <span className="tag-pill"><CheckCircle2 size={13} /> Interactive Digital Menu</span>
                <span className="tag-pill"><CheckCircle2 size={13} /> Table Booking System</span>
                <span className="tag-pill"><CheckCircle2 size={13} /> Ultra Fast Speed</span>
              </div>

              <a
                href="https://wa.me/919302252353?text=Hi%20HK%20Studio,%20I%20saw%20Royal%20Spice%20Restaurant%20work%20and%20want%20a%20restaurant%20website"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary work-cta-btn"
              >
                Get Restaurant Website <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="glass-card client-card">
            <div className="client-card-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&auto=format&fit=crop&q=80"
                alt="Elevate Interior Studio Website"
                className="client-card-img"
              />
              <span className="industry-badge">Architecture & Interiors</span>
              <span className="result-chip">💎 Premium Portfolio Showcase</span>
            </div>

            <div className="client-card-body">
              <div className="client-rating">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
                ))}
                <span className="rating-text">5.0 Verified Feedback</span>
              </div>

              <h3 className="client-biz-title">Elevate Luxury Interiors</h3>
              <p className="client-biz-location">Indore / Dewas</p>

              <div className="testimonial-box">
                <Quote size={24} className="quote-icon" />
                <p className="testimonial-text">
                  "We needed a luxury glassmorphism dark website to present our premium architectural projects to high-net-worth clients. Harshit delivered beyond our expectations. Our clients are deeply impressed."
                </p>
              </div>

              <div className="client-info-author">
                <div className="author-avatar">PV</div>
                <div>
                  <h4 className="author-name">Priya Verma</h4>
                  <p className="author-role">Principal Architect & Founder</p>
                </div>
              </div>

              <div className="project-tags">
                <span className="tag-pill"><CheckCircle2 size={13} /> Dark Glassmorphism Design</span>
                <span className="tag-pill"><CheckCircle2 size={13} /> Project Gallery</span>
                <span className="tag-pill"><CheckCircle2 size={13} /> High-End UX</span>
              </div>

              <a
                href="https://wa.me/919302252353?text=Hi%20HK%20Studio,%20I%20saw%20Elevate%20Interiors%20work%20and%20want%20a%20luxury%20portfolio%20website"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary work-cta-btn"
              >
                Get Luxury Portfolio Site <ArrowRight size={16} />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US / TRUST SECTION */}
      <section id="why-us">
        <h2>Why Businesses Trust Us</h2>
        <p className="section-subtitle">
          We don't just build pretty websites. We build client acquisition engines designed to increase your revenue.
        </p>

        <div className="card-grid-4">
          <div className="glass-card trust-card">
            <div className="icon-box">
              <Clock size={24} />
            </div>
            <h3>7-Day Turnaround</h3>
            <p>Fast delivery without compromising quality so you can start capturing leads immediately.</p>
          </div>

          <div className="glass-card trust-card">
            <div className="icon-box">
              <Target size={24} />
            </div>
            <h3>Lead-Focused UX</h3>
            <p>Every element, button, and headline is crafted specifically to convert visitors into inquiries.</p>
          </div>

          <div className="glass-card trust-card">
            <div className="icon-box">
              <MessageSquare size={24} />
            </div>
            <h3>WhatsApp Automation</h3>
            <p>Instant inquiry capture on your WhatsApp so you never miss a prospective client or patient.</p>
          </div>

          <div className="glass-card trust-card">
            <div className="icon-box">
              <ShieldCheck size={24} />
            </div>
            <h3>Ongoing Support</h3>
            <p>We stay with you post-delivery for regular updates, maintenance, and campaign tweaks.</p>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services">
        <h2>Our Core Growth Services</h2>
        <p className="section-subtitle">
          Comprehensive digital solutions engineered to scale local clinics, showrooms, and service businesses.
        </p>

        <div className="card-grid-4">
          <div className="glass-card service-card">
            <div className="icon-box">
              <Rocket size={24} />
            </div>
            <h3>Website Development</h3>
            <p>Custom, mobile-first responsive websites optimized for high speed and seamless user experience.</p>
            <ul className="feature-bullets">
              <li><CheckCircle2 size={16} /> Ultra-Fast Loading Speeds</li>
              <li><CheckCircle2 size={16} /> One-Tap WhatsApp & Call Triggers</li>
              <li><CheckCircle2 size={16} /> SEO Friendly Architecture</li>
            </ul>
            <a href="#contact" className="service-link">
              Get Started <ArrowRight size={14} />
            </a>
          </div>

          <div className="glass-card service-card">
            <div className="icon-box">
              <TrendingUp size={24} />
            </div>
            <h3>Meta Ads System</h3>
            <p>High-intent patient & customer acquisition campaigns on Instagram & Facebook.</p>
            <ul className="feature-bullets">
              <li><CheckCircle2 size={16} /> Hyper-Local Geo Targeting</li>
              <li><CheckCircle2 size={16} /> High-Converting Ad Creatives</li>
              <li><CheckCircle2 size={16} /> Daily ROI Tracking & Tweaks</li>
            </ul>
            <a href="#contact" className="service-link">
              Get Started <ArrowRight size={14} />
            </a>
          </div>

          <div className="glass-card service-card">
            <div className="icon-box">
              <Zap size={24} />
            </div>
            <h3>Conversion Landing Pages</h3>
            <p>Dedicated single-page funnels optimized exclusively for ad campaigns & max conversions.</p>
            <ul className="feature-bullets">
              <li><CheckCircle2 size={16} /> High Impact Copywriting</li>
              <li><CheckCircle2 size={16} /> Clear Call-to-Actions</li>
              <li><CheckCircle2 size={16} /> A/B Tested Layouts</li>
            </ul>
            <a href="#contact" className="service-link">
              Get Started <ArrowRight size={14} />
            </a>
          </div>

          <div className="glass-card service-card">
            <div className="icon-box">
              <MessageSquare size={24} />
            </div>
            <h3>WhatsApp Funnel Setup</h3>
            <p>Automated chat funnels that capture inquiry details and send automated follow-ups 24/7.</p>
            <ul className="feature-bullets">
              <li><CheckCircle2 size={16} /> Instant Lead Notifications</li>
              <li><CheckCircle2 size={16} /> Automated Booking Flows</li>
              <li><CheckCircle2 size={16} /> Zero Lead Leakage</li>
            </ul>
            <a href="#contact" className="service-link">
              Get Started <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* PRICING / GROWTH PLANS */}
      <section id="pricing">
        <h2>Custom Growth Plans</h2>
        <p className="section-subtitle">
          Transparent, ROI-focused investment plans designed according to your business size & growth goals.
        </p>

        <div className="card-grid-3">

          {/* PLAN 1 */}
          <div className="glass-card pricing-card">
            <h3 className="plan-name">Website Growth System</h3>
            <p className="plan-desc">Perfect for local businesses wanting a modern, high-trust digital presence.</p>
            <div className="plan-price-tag">
              <span className="label">Investment: ₹15k – ₹25k</span>
            </div>
            <ul className="plan-features">
              <li><CheckCircle2 size={16} /> Custom Responsive Website (Up to 5 Pages)</li>
              <li><CheckCircle2 size={16} /> Direct WhatsApp & Click-to-Call Buttons</li>
              <li><CheckCircle2 size={16} /> Speed & Mobile Optimization</li>
              <li><CheckCircle2 size={16} /> Google Maps & Business Integration</li>
              <li><CheckCircle2 size={16} /> 1 Year Free Domain & Hosting Guidance</li>
            </ul>
            <a
              href="https://wa.me/919302252353?text=Hi,%20I'm%20interested%20in%20the%20Website%20Growth%20System"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ width: "100%" }}
            >
              Choose Website Plan
            </a>
          </div>

          {/* PLAN 2 - FEATURED */}
          <div className="glass-card pricing-card featured">
            <div className="popular-badge">🔥 Most Popular</div>
            <h3 className="plan-name">Lead Generation Engine</h3>
            <p className="plan-desc">For clinics & businesses ready to acquire steady daily client inquiries.</p>
            <div className="plan-price-tag">
              <span className="label">Investment: ₹25k – ₹50k</span>
            </div>
            <ul className="plan-features">
              <li><CheckCircle2 size={16} /> High-Converting Landing Page</li>
              <li><CheckCircle2 size={16} /> Full Meta Ads Setup & Campaign Launch</li>
              <li><CheckCircle2 size={16} /> Automated WhatsApp Lead Capture Funnel</li>
              <li><CheckCircle2 size={16} /> Ad Copy & High-Impact Ad Creatives</li>
              <li><CheckCircle2 size={16} /> Weekly Campaign Optimization & Reports</li>
            </ul>
            <a
              href="https://wa.me/919302252353?text=Hi,%20I'm%20interested%20in%20the%20Lead%20Generation%20Engine"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ width: "100%" }}
            >
              Launch Lead System
            </a>
          </div>

          {/* PLAN 3 */}
          <div className="glass-card pricing-card">
            <h3 className="plan-name">Complete Clinic Dominance</h3>
            <p className="plan-desc">All-in-one growth architecture for maximum revenue & market domination.</p>
            <div className="plan-price-tag">
              <span className="label">Investment: ₹50k+</span>
            </div>
            <ul className="plan-features">
              <li><CheckCircle2 size={16} /> Premium Multi-Page Website + Landing Pages</li>
              <li><CheckCircle2 size={16} /> Omnichannel Ads (Meta + Google Ads)</li>
              <li><CheckCircle2 size={16} /> Advanced WhatsApp Automation & CRM Integration</li>
              <li><CheckCircle2 size={16} /> Retargeting & Review Automation</li>
              <li><CheckCircle2 size={16} /> Dedicated Growth Manager & Priority 24/7 Support</li>
            </ul>
            <a
              href="https://wa.me/919302252353?text=Hi,%20I'm%20interested%20in%20the%20Complete%20Clinic%20Dominance%20Plan"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ width: "100%" }}
            >
              Get Custom Quote
            </a>
          </div>

        </div>
      </section>

      {/* LIVE DEMOS */}
      <section id="demo">
        <h2>Live Demo Showcase</h2>
        <p className="section-subtitle">
          Take a look at sample interactive designs and lead funnels engineered for different industries.
        </p>

        <div className="card-grid-3">

          <div className="glass-card demo-card">
            <div className="demo-preview">
              <span className="demo-category">Restaurant & Dining</span>
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&auto=format&fit=crop&q=80"
                alt="Restaurant Demo"
                className="demo-preview-img"
              />
            </div>
            <div className="demo-content">
              <h3>Gourmet Restaurant Demo</h3>
              <p>Stunning food layout with instant table reservation & WhatsApp ordering system.</p>
              <a
                href="https://themewagon.github.io/feane/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ width: "100%" }}
              >
                View Live Demo <ExternalLink size={16} />
              </a>
            </div>
          </div>

          <div className="glass-card demo-card">
            <div className="demo-preview">
              <span className="demo-category">Retail & Showroom</span>
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&auto=format&fit=crop&q=80"
                alt="Showroom Demo"
                className="demo-preview-img"
              />
            </div>
            <div className="demo-content">
              <h3>Stylish Showroom Demo</h3>
              <p>High-end product showcase designed to drive footfall and inquiries for retail brands.</p>
              <a
                href="https://themewagon.github.io/stylish/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ width: "100%" }}
              >
                View Live Demo <ExternalLink size={16} />
              </a>
            </div>
          </div>

          <div className="glass-card demo-card">
            <div className="demo-preview">
              <span className="demo-category">Healthcare & Clinics</span>
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&auto=format&fit=crop&q=80"
                alt="Clinic Funnel"
                className="demo-preview-img"
              />
            </div>
            <div className="demo-content">
              <h3>Clinic Patient Funnel Demo</h3>
              <p>Specialized patient acquisition page integrated with instant WhatsApp appointment booking.</p>
              <a
                href="https://wa.me/919302252353?text=Hi,%20I'd%20like%20to%20see%20a%20live%20WhatsApp%20Clinic%20Funnel%20Demo"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ width: "100%" }}
              >
                Test WhatsApp Demo <MessageSquare size={16} />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact">
        <h2>Let’s Grow Your Business</h2>
        <p className="section-subtitle">
          Ready to get 30–100 new qualified leads every month? Fill out the form below or message us directly on WhatsApp.
        </p>

        <div className="contact-container">

          {/* LEFT: DIRECT CONTACT INFO */}
          <div className="contact-info-panel">
            <a href="https://wa.me/919302252353" target="_blank" rel="noopener noreferrer" className="info-item">
              <div className="info-icon">
                <MessageSquare size={22} />
              </div>
              <div className="info-details">
                <h4>WhatsApp Direct</h4>
                <p>+91 9302252353</p>
              </div>
            </a>

            <a href="tel:+919302252353" className="info-item">
              <div className="info-icon">
                <Phone size={22} />
              </div>
              <div className="info-details">
                <h4>Call Us Direct</h4>
                <p>+91 9302252353</p>
              </div>
            </a>

            <a href="mailto:harshitkasera01@gmail.com" className="info-item">
              <div className="info-icon">
                <Mail size={22} />
              </div>
              <div className="info-details">
                <h4>Email Inquiries</h4>
                <p>harshitkasera01@gmail.com</p>
              </div>
            </a>

            <div className="info-item">
              <div className="info-icon">
                <MapPin size={22} />
              </div>
              <div className="info-details">
                <h4>Location</h4>
                <p>Shajapur (M.P.), India</p>
              </div>
            </div>
          </div>

          {/* RIGHT: STRATEGY FORM */}
          <div className="form-wrapper">
            <h3 className="form-title">Apply For Free Strategy Call</h3>
            <p className="form-sub">Fill in your details and we will reach out within 2 hours with a custom growth plan.</p>

            <form
              action="https://api.web3forms.com/submit"
              method="POST"
            >
              <input type="hidden" name="access_key" value="75784ebb-ef32-4f81-8842-cc3fa717c552" />
              <input type="hidden" name="subject" value="New Growth Strategy Call Request" />
              <input type="hidden" name="from_name" value="HK Digital Website" />

              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  placeholder="e.g. Dr. Rahul Sharma / Rahul Verma"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone / WhatsApp Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="form-input"
                  placeholder="e.g. 9876543210"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  placeholder="e.g. rahul@clinic.com"
                  required
                />
              </div>


              <div className="form-group">
                <label htmlFor="message">Business & Goal Details</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-input"
                  placeholder="Tell us about your business, current website or growth challenges..."
                ></textarea>
              </div>

              <button type="submit" className="btn-primary form-submit-btn">
                <Rocket size={18} /> Apply For Free Strategy Call
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href="https://wa.me/919302252353?text=Hi%20HK%20Digital,%20I'm%20visiting%20your%20website%20and%20want%20to%20discuss%20a%20project"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
        title="Chat with us on WhatsApp"
        aria-label="WhatsApp Chat"
      >
        <MessageSquare size={28} />
      </a>

    </div>
  );
};

export default Home;