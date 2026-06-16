export const quoteInitialForm = {
  linearFeet: '120',
  homeStories: '1',
  serviceType: 'cleaning',
};

export const quoteRates = {
  cleaning: 4,
  install: 6.5,
};

export function calculateQuote(formData) {
  const feet = Number(formData.linearFeet);
  const stories = Number(formData.homeStories);
  const rate = quoteRates[formData.serviceType] ?? quoteRates.cleaning;

  if (Number.isNaN(feet) || Number.isNaN(stories) || feet <= 0 || stories <= 0) {
    return null;
  }

  const storyMultiplier = 1 + Math.max(0, stories - 1) * 0.12;
  return Math.round(feet * rate * storyMultiplier + 35);
}
