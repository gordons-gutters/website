import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <section className="section container page-top-offset">
      <div className="section-heading">
        <h1>Contact Us</h1>
        <p>Request your quote and we will reach out quickly to schedule your service.</p>
      </div>
      <ContactForm />
    </section>
  );
}
