import { galleryImages } from '../models/contentModel';

export default function useGalleryController() {
  return {
    images: galleryImages,
  };
}
