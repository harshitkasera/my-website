import React from "react";

const Home = () => {
  return (
    <div>

      {/* HERO */}
      <section className="hero" id="home">
        <h1>
          We Help Clinics & Local Businesses Generate <br />
          30–100 Qualified Leads Per Month
        </h1>
        <p>
          Premium Websites + WhatsApp Funnels + Meta Ads System
        </p>

        <div className="hero-buttons">
          <a
            href="https://wa.me/919302252353"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="primary">Book Free 15 Min Growth Call</button>
          </a>

          <a href="#services">
            <button className="secondary">View Services</button>
          </a>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="trust">
        <h2>Why Choose Us?</h2>
        <div className="card-grid">
          <div className="card">
            <h3>7 Day Delivery</h3>
            <p>Fast turnaround without compromising quality.</p>
          </div>

          <div className="card">
            <h3>Lead Focused Design</h3>
            <p>Every website is built to generate inquiries.</p>
          </div>

          <div className="card">
            <h3>WhatsApp Integration</h3>
            <p>Instant inquiry capture & automation setup.</p>
          </div>

          <div className="card">
            <h3>Ongoing Support</h3>
            <p>We don’t disappear after delivery.</p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services" id="services">
        <h2>Our Core Services</h2>

        <div className="card-grid">
          <div className="card">
            <h3>Website Development</h3>
            <p>Premium responsive websites with WhatsApp & Call integration.</p>
          </div>

          <div className="card">
            <h3>Meta Ads Management</h3>
            <p>High-intent patient & customer lead generation system.</p>
          </div>

          <div className="card">
            <h3>Landing Pages</h3>
            <p>Conversion-focused pages designed for maximum inquiries.</p>
          </div>

          <div className="card">
            <h3>WhatsApp Lead Funnel</h3>
            <p>Automated inquiry capture system for better conversions.</p>
          </div>
        </div>
      </section>

      {/* PRICING */}
      {/* GROWTH PLANS */}
<section className="pricing">
  <h2>Custom Growth Plans</h2>
  <p className="pricing-sub">
    Every business is different. We create custom growth systems 
    based on your goals, competition & budget.
  </p>

  <div className="card-grid">
    <div className="card">
      <h3>Website Growth System</h3>
      <p>Premium website + WhatsApp integration + Lead capture setup.</p>
    </div>

    <div className="card">
      <h3>Lead Generation System</h3>
      <p>High-converting landing pages + Meta Ads management.</p>
    </div>

    <div className="card">
      <h3>Complete Clinic Growth</h3>
      <p>Website + Ads + Funnel automation + Monthly optimization.</p>
    </div>
  </div>

  <a href="#contact">
    <button className="primary" style={{ marginTop: "40px" }}>
      Apply For Free Strategy Call
    </button>
  </a>
</section>

      {/* DEMO */}
      <section className="demo" id="demo">
        <h2>Live Demo Websites</h2>

        <div className="card-grid">
          <div className="card">
            <h3>Restaurant Demo</h3>
            <a
              href="https://themewagon.github.io/feane/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>View Demo</button>
            </a>
          </div>

          <div className="card">
            <h3>Showroom Demo</h3>
            <a
              href="https://themewagon.github.io/stylish/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>View Demo</button>
            </a>
          </div>

          <div className="card">
            <h3>Clinic Landing Page</h3>
            <a
              href="https://wa.me/919302252353"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Demo on WhatsApp</button>
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <h2>Let’s Grow Your Business</h2>

        <form
          action="https://formsubmit.co/harshitkasera01@gmail.com"
          method="POST"
          className="form"
        >
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <input type="tel" name="phone" placeholder="Phone Number" required />

          <select name="budget" required>
            <option value="">Select Project Budget</option>
            <option>₹15k – ₹25k</option>
            <option>₹25k – ₹50k</option>
            <option>₹50k+</option>
          </select>

          <textarea
            name="message"
            placeholder="Tell us about your business"
          ></textarea>

          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="New Website Inquiry" />

          <button className="btn" type="submit">
            Apply For Free Strategy Call
          </button>
        </form>
      </section>

    </div>
  );
};

export default Home;