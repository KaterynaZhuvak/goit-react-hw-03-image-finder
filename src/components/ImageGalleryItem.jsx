export const ImageGalleryItem = ({ image, tags, id, largeImage}) => {

  return (
    <li class="gallery-item">
      <img id={id} src={image} alt={tags} largeImage={largeImage} />
    </li>
  );
};
