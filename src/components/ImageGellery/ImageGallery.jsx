import { ImageGalleryItem } from './ImageGalleryItem';
import css from './ImadeGallery.module.css'
export const ImageGallery = ({ images, openModal }) => {
      const handleImage = (e) => {
          const currentImg = e.target.attributes[3].value
          console.dir(currentImg)
            openModal(currentImg)
    }
  return (
    <ul className={css.galleryContainer} onClick={handleImage}>
      {images !== null &&
        images.map(image => (
          <ImageGalleryItem
                key={image.id}
                image={image.webformatURL}
                tags={image.tags}
                id={image.id}
                largeImage={image.largeImageURL}
          />
        ))}
      </ul>
  );
};
