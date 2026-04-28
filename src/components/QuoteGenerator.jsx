const initialForm = {
  linearFeet: 0,
  homeStories: 0,
};

export default function QuoteGenerator() {

  let linearFeet = 0;
  // service rate in $USD
  const cleaningRate = 4;
  const installRate = 6.5;

  function calculateQuote(){
    
  }
    
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
            />
            {errors.message ? (
              <span className="field-error">{errors.message}</span>
            ) : null}
          </label>

          <button type="submit" className="btn btn-large">
            Submit
          </button>

          {submitted ? (
            <p className="success-message">
              Thank you. We will contact you shortly with your quote.
            </p>
          ) : null}
        </form>
      </div>
    );
}

