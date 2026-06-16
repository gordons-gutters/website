import { homeServices, previewImages, reviews } from '../models/contentModel';

export default function useHomeController() {
  return {
    services: homeServices,
    previewImages,
    reviews,
  };
}
