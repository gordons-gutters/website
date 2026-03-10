import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Main navigation">
        <Link to="/" className="brand" onClick={closeMenu}>
          <img
            src="/images/gordons-gutters-logo.png"
            alt="Gordon's Gutters logo"
            className="brand-logo"
          />
          <span>Gordon's Gutters</span>
        </Link>

        <button
          className={`menu-toggle ${isOpen ? 'active' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <NavLink to="/" onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/services" onClick={closeMenu}>
            Services
          </NavLink>
          <NavLink to="/gallery" onClick={closeMenu}>
            Gallery
          </NavLink>
          <NavLink to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>
          <Link to="/contact" className="btn btn-small" onClick={closeMenu}>
            Get Quote
          </Link>
        </div>
      </nav>
    </header>
  );
}
