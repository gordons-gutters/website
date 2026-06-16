import useQuoteController from '../../controllers/useQuoteController';

export default function QuoteGenerator() {
  const { formData, quote, handleChange, handleSubmit } = useQuoteController();

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
