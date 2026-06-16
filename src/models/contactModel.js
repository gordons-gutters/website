export const contactInitialForm = {
  name: '',
  phone: '',
  email: '',
  address: '',
  footage: '',
  message: '',
};

export const CONTACT_ENDPOINT = 'https://formspree.io/f/mdayypvo';

export function validateContactForm(formData) {
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
}

export async function submitContactForm(formData) {
  const response = await fetch(CONTACT_ENDPOINT, {
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

  return response;
}
