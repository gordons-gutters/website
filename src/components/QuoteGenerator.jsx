import { useMemo, useState } from 'react';

const initialForm = {
  linearFeet: '120',
  homeStories: '1',
  serviceType: 'cleaning',
};

const rates = {
  cleaning: 4,
  install: 6.5,
};

export default function QuoteGenerator() {
  const [formData, setFormData] = useState(initialForm);
  const [quote, setQuote] = useState(null);

  const estimatedQuote = useMemo(() => {
    const feet = Number(formData.linearFeet);
    const stories = Number(formData.homeStories);
    const rate = rates[formData.serviceType] ?? rates.cleaning;

    if (Number.isNaN(feet) || Number.isNaN(stories) || feet <= 0 || stories <= 0) {
      return null;
    }

    const storyMultiplier = 1 + Math.max(0, stories - 1) * 0.12;
    return Math.round(feet * rate * storyMultiplier + 35);
  }, [formData]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setQuote(estimatedQuote);
  };

  return (
    <section className="section container page-top-offset">
      <div className="section-heading">
        <h1>Instant Quote</h1>
        <p>Estimate your gutter service cost with a few quick inputs.</p>
      </div>

      <div className="contact-form-wrapper">
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-grid">
            <label>
              Linear Footage
              <input
                type="number"
                name="linearFeet"
                value={formData.linearFeet}
                onChange={handleChange}
                placeholder="120"
                min="1"
                required
              />
            </label>

            <label>
              Home Stories
              <input
                type="number"
                name="homeStories"
                value={formData.homeStories}
                onChange={handleChange}
                placeholder="1"
                min="1"
                max="3"
                required
              />
            </label>

            <label>
              Service Type
              <select name="serviceType" value={formData.serviceType} onChange={handleChange}>
                <option value="cleaning">Gutter Cleaning</option>
                <option value="install">Gutter Guard Installation</option>
              </select>
            </label>
          </div>

          <button type="submit" className="btn btn-large">
            Calculate Quote
          </button>

          {quote !== null ? (
            <p className="success-message">Estimated quote: ${quote}</p>
          ) : null}
        </form>
      </div>
    </section>
  );
}

