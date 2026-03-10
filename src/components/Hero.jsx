import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-overlay" />
      <div className="container hero-content">
        <p className="eyebrow">Trusted Local Home Service</p>
        <h1>Protect Your Home with Clean Gutters</h1>
        <p>
          Gordon's Gutters helps homeowners prevent water damage with professional gutter
          cleaning, downspout care, and long-lasting gutter guard installation.
        </p>
        <div className="hero-actions">
          <Link to="/contact" className="btn btn-large">
            Get a Free Quote
          </Link>
          <a href="#services-preview" className="btn btn-ghost btn-large">
            Explore Services
          </a>
        </div>
      </div>
    </section>
  );
}
