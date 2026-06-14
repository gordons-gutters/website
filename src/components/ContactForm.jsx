import { useState } from 'react';

const initialForm = {
  name: '',
  phone: '',
  email: '',
  address: '',
  footage: '',
  message: '',
};

export default function ContactForm() {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const nextErrors = {};

    if (!formData.name.trim()) nextErrors.name = 'Name is required.';
    if (!formData.phone.trim()) {
      nextErrors.phone = 'Phone is required.';
    } else if (!/^\+?[\d\s()-]{10,}$/.test(formData.phone)) {
      nextErrors.phone = 'Enter a valid phone number.';
    }

    if (!formData.email.trim()) {
      nextErrors.email = 'Email is required.';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      nextErrors.email = 'Enter a valid email address.';
    }

    if (!formData.address.trim()) nextErrors.address = 'Address is required.';
    if (!formData.message.trim()) nextErrors.message = 'Please tell us what you need.';

    if (!formData.footage.trim()) {
      nextErrors.footage = 'Please tell us how many linear feet your gutter system is.';
    } else if (Number.isNaN(Number(formData.footage))) {
      nextErrors.footage = 'Linear footage must be a number.';
    }

    return nextErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      setSubmitError('');
      setIsSubmitting(true);

      try {
        const response = await fetch('https://formspree.io/f/mdayypvo', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error('Form submission failed');
        }

        setSubmitted(true);
        setFormData(initialForm);
      } catch (error) {
        setSubmitError('We could not send your message. Please try again or call us directly.');
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setSubmitError('');
      setSubmitted(false);
    }
  };

  return (
    <div className="contact-form-wrapper">
      <form
        className="contact-form"
        onSubmit={handleSubmit}
        action={"https://formspree.io/f/mdayypvo"}
        method="POST"
        noValidate
      >
        <div className="form-grid">
          <label>
            Name
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              required
            />
            {errors.name ? (
              <span className="field-error">{errors.name}</span>
            ) : null}
          </label>

          <label>
            Phone
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="(555) 123-4567"
              required
            />
            {errors.phone ? (
              <span className="field-error">{errors.phone}</span>
            ) : null}
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="name@example.com"
              required
            />
            {errors.email ? (
              <span className="field-error">{errors.email}</span>
            ) : null}
          </label>

          <label>
            Address
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Service address"
              required
            />
            {errors.address ? (
              <span className="field-error">{errors.address}</span>
            ) : null}
          </label>
        </div>

        <label>
          Message
          <textarea
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your home and what service you need."
            required
          />
          {errors.message ? (
            <span className="field-error">{errors.message}</span>
          ) : null}
        </label>

        <button type="submit" className="btn btn-large" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Submit'}
        </button>

        {submitError ? <p className="field-error">{submitError}</p> : null}

        {submitted ? (
          <p className="success-message">
            Thank you. We will contact you shortly with your quote.
          </p>
        ) : null}
      </form>
    </div>
  );
}
