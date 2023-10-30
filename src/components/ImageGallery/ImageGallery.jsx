import { ImageGalleryItem } from './ImageGalleryItem';
import css from './ImadeGallery.module.css';
export const ImageGallery = ({ images, openModal }) => {
  const handleImage = e => {
    const currentImg = e.target.attributes[3].value;
    const tags = e.target.alt;
    openModal(currentImg, tags);
  };
  return (
    <ul className={css.galleryContainer} onClick={handleImage}>
      {images !== null &&
        images.map(image => (
          <ImageGalleryItem
            key={image.id}
            image={image.webformatURL}
            tags={image.tags}
            id={image.id}
            largeimage={image.largeImageURL}
          />
        ))}
    </ul>
  );
};
