import { ImageGalleryItem } from './ImageGalleryItem';
export const ImageGallery = ({ images, openModal }) => {
      const handleImage = (e) => {
          const currentImg = e.target.attributes[3].value
          console.dir(currentImg)
            openModal(currentImg)
    }
  return (
    <ul className="gallery" onClick={handleImage}>
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
