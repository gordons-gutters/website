import GalleryGrid from '../components/GalleryGrid';
// "/website/" tells Vite that your app is served
// from /website/ rather than the domain root. This
// prevents images displaying as their alt text.

const galleryImages = [
  {
    src: '/website/images/gutters/watery.jpg',
    alt: 'Before image with heavy gutter debris',
    caption: 'Before cleaning',
  },
  {
    src: '/website/images/gutters/clean.jpg',
    alt: 'After image of clean gutter line',
    caption: 'After cleaning',
  },
  {
    src: '/website/images/gutters/installed-90.jpg',
    alt: 'Gutter guard installation work',
    caption: 'Guard installation',
  },
  {
    src: '/website/images/gutters/straight.jpg',
    alt: 'Technician checking downspout',
    caption: 'Downspout clearing',
  },
  {
    src: '/website/images/gutters/front-roof.jpg',
    alt: 'Home exterior with maintained gutters',
    caption: 'Completed project',
  },
  {
    src: '/website/images/gutters/backyard.jpg',
    alt: 'Roofline and drainage system',
    caption: 'Clean, functional drainage',
  },
];

export default function Gallery() {
  return (
    <section className="section container page-top-offset">
      <div className="section-heading">
        <h1>Gallery</h1>
        <p>Before and after results from homes we service.</p>
      </div>
      <GalleryGrid images={galleryImages} />
    </section>
  );
}
