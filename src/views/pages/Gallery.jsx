import GalleryGrid from '../components/GalleryGrid';
import useGalleryController from '../../controllers/useGalleryController';

export default function Gallery() {
  const { images } = useGalleryController();

  return (
    <section className="section container page-top-offset">
      <div className="section-heading">
        <h1>Gallery</h1>
        <p>Before and after results from homes we service.</p>
      </div>
      <GalleryGrid images={images} />
    </section>
  );
}
