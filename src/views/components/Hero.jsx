import { Link } from 'react-router-dom';
import useHeroController from '../../controllers/useHeroController';

export default function Hero() {
  const { eyebrow, title, description } = useHeroController();

  return (
    <section className="hero" id="top">
      <div className="hero-overlay" />
      <div className="container hero-content">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{description}</p>
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
