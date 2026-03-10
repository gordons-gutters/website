import GalleryGrid from '../components/GalleryGrid';

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&w=1200&q=80',
    alt: 'Before image with heavy gutter debris',
    caption: 'Before cleaning',
  },
  {
    src: 'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=80',
    alt: 'After image of clean gutter line',
    caption: 'After cleaning',
  },
  {
    src: 'https://images.unsplash.com/photo-1600047509358-9dc75507daeb?auto=format&fit=crop&w=1200&q=80',
    alt: 'Gutter guard installation work',
    caption: 'Guard installation',
  },
  {
    src: 'https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?auto=format&fit=crop&w=1200&q=80',
    alt: 'Technician checking downspout',
    caption: 'Downspout clearing',
  },
  {
    src: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=1200&q=80',
    alt: 'Home exterior with maintained gutters',
    caption: 'Completed project',
  },
  {
    src: 'https://images.unsplash.com/photo-1605146769289-440113cc3d00?auto=format&fit=crop&w=1200&q=80',
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
