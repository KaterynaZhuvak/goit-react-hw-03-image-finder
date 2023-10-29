import { ImageGalleryItem } from './ImageGalleryItem';
export const ImageGallery = ({ images }) => {
  return (
    <ul className="gallery">
      {images !== null &&
        images.map(image => (
          <ImageGalleryItem
            key={image.id}
            image={image.webformatURL}
            tags={image.tags}
          />
        ))}
      </ul>
  );
};
