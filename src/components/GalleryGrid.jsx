export default function GalleryGrid({ images }) {
  return (
    <section className="gallery-grid">
      {images.map((image) => (
        <figure className="gallery-item" key={image.src}>
          <img src={image.src} alt={image.alt} loading="lazy" />
          {image.caption ? <figcaption>{image.caption}</figcaption> : null}
        </figure>
      ))}
    </section>
  );
}
