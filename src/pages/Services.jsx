import ServiceCard from '../components/ServiceCard';

const serviceItems = [
  {
    title: 'Gutter Cleaning',
    description:
      'Detailed hand-cleaning and flush test to remove leaves, dirt, and roof sediment from your gutter system.',
    icon: '01',
  },
  {
    title: 'Gutter Guard Installation',
    description:
      'Professional guard fitting that helps prevent clogs while maintaining proper water flow in heavy weather.',
    icon: '02',
  },
  {
    title: 'Downspout Cleaning',
    description:
      'Complete clearing of elbows and lower drain exits to protect your home from pooling and overflow.',
    icon: '03',
  },
  {
    title: 'Free Inspection',
    description:
      'No-cost visual inspection with straightforward recommendations and transparent quote options.',
    icon: '04',
  },
];

export default function Services() {
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
