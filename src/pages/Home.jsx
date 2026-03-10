import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import GalleryGrid from '../components/GalleryGrid';
import ContactForm from '../components/ContactForm';

const services = [
  {
    title: 'Gutter Cleaning',
    description: 'Seasonal removal of leaves and buildup to keep water flowing safely.',
    icon: '01',
  },
  {
    title: 'Gutter Guard Installation',
    description: 'Reduce clogs and maintenance with durable, low-visibility guards.',
    icon: '02',
  },
  {
    title: 'Downspout Cleaning',
    description: 'Full downspout clearing to prevent backup and overflow near your foundation.',
    icon: '03',
  },
];

const previewImages = [
  {
    src: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=80',
    alt: 'Clean residential gutters after service',
    caption: 'After: debris removed and channels cleared',
  },
  {
    src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    alt: 'Crew servicing roof gutters',
    caption: 'Professional service with safety-first process',
  },
  {
    src: 'https://images.unsplash.com/photo-1601762603339-fd61e28b698a?auto=format&fit=crop&w=1200&q=80',
    alt: 'Home exterior with maintained gutter lines',
    caption: 'Before and after transformations',
  },
];

const reviews = [
  {
    name: 'K. Monroe',
    quote: 'They showed up on time, cleaned everything, and found a blocked downspout before it became a bigger issue.',
  },
  {
    name: 'J. Patel',
    quote: 'Fast quote, professional crew, and the new guards look great. Worth every dollar.',
  },
  {
    name: 'L. Rivera',
    quote: 'Clear communication and fair pricing. I now schedule them every spring and fall.',
  },
];

export default function Home() {
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
            Serving homeowners across Maple Ridge, Brookside, Northfield, and nearby
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
