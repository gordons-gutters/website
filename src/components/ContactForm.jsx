import { useState } from 'react';

const initialForm = {
  name: '',
  phone: '',
  email: '',
  address: '',
  message: '',
};

export default function ContactForm() {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

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

    return nextErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
      setFormData(initialForm);
    }
  };

  return (
    <div className="contact-form-wrapper">
      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="form-grid">
          <label>
            Name
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
            />
            {errors.name ? <span className="field-error">{errors.name}</span> : null}
          </label>

          <label>
            Phone
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="(555) 123-4567"
            />
            {errors.phone ? <span className="field-error">{errors.phone}</span> : null}
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="name@example.com"
            />
            {errors.email ? <span className="field-error">{errors.email}</span> : null}
          </label>

          <label>
            Address
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Service address"
            />
            {errors.address ? <span className="field-error">{errors.address}</span> : null}
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
          />
          {errors.message ? <span className="field-error">{errors.message}</span> : null}
        </label>

        <button type="submit" className="btn btn-large">
          Submit
        </button>

        {submitted ? (
          <p className="success-message">Thank you. We will contact you shortly with your quote.</p>
        ) : null}
      </form>
    </div>
  );
}
