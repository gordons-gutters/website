import { useMemo, useState } from 'react';
import { calculateQuote, quoteInitialForm } from '../models/quoteModel';

export default function useQuoteController() {
  const [formData, setFormData] = useState(quoteInitialForm);
  const [quote, setQuote] = useState(null);

  const estimatedQuote = useMemo(() => calculateQuote(formData), [formData]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setQuote(estimatedQuote);
  };

  return {
    formData,
    quote,
    handleChange,
    handleSubmit,
  };
}
