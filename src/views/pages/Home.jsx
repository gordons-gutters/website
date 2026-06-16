import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import GalleryGrid from '../components/GalleryGrid';
import ContactForm from '../components/ContactForm';
import useHomeController from '../../controllers/useHomeController';

export default function Home() {
  const { services, previewImages, reviews } = useHomeController();

  return (
    <>
      <Hero />

      <section className="section container" id="services-preview">
        <div className="section-heading">
          <h2>Core Services</h2>
          <Link to="/services" className="text-link">
            View all services
          </Link>
        </div>
        <div className="cards-grid">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="section-heading">
            <h2>Before and After</h2>
            <Link to="/gallery" className="text-link">
              Browse full gallery
            </Link>
          </div>
          <GalleryGrid images={previewImages} />
        </div>
      </section>

      <section className="section container">
        <div className="section-heading">
          <h2>Customer Reviews</h2>
        </div>
        <div className="cards-grid reviews-grid">
          {reviews.map((review) => (
            <article className="card review-card" key={review.name}>
              <p>"{review.quote}"</p>
              <h3>{review.name}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-light">
        <div className="container areas">
          <h2>Service Areas</h2>
          <p>
            Serving homeowners across Pocatello, Chubbuck, Inkom, and nearby
            communities.
          </p>
        </div>
      </section>

      <section className="section container" id="quote-form">
        <div className="section-heading">
          <h2>Request a Free Quote</h2>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
