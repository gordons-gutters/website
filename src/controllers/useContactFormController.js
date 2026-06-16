import { useState } from 'react';
import {
  contactInitialForm,
  CONTACT_ENDPOINT,
  submitContactForm,
  validateContactForm,
} from '../models/contactModel';

export default function useContactFormController() {
  const [formData, setFormData] = useState(contactInitialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = validateContactForm(formData);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitError('');
      setSubmitted(false);
      return;
    }

    setSubmitError('');
    setIsSubmitting(true);

    try {
      await submitContactForm(formData);
      setSubmitted(true);
      setFormData(contactInitialForm);
    } catch {
      setSubmitError('We could not send your message. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    action: CONTACT_ENDPOINT,
    formData,
    errors,
    submitted,
    submitError,
    isSubmitting,
    handleChange,
    handleSubmit,
  };
}
