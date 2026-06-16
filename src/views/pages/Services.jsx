import ServiceCard from '../components/ServiceCard';
import useServicesController from '../../controllers/useServicesController';

export default function Services() {
  const { serviceItems } = useServicesController();

  return (
    <section className="section container page-top-offset">
      <div className="section-heading">
        <h1>Services</h1>
        <p>Home gutter solutions designed to protect your property year-round.</p>
      </div>
      <div className="cards-grid">
        {serviceItems.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  );
}
