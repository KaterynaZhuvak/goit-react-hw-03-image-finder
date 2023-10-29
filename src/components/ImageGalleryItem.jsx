export const ImageGalleryItem = ({ image, tags }) => {
  return (
    <li class="gallery-item">
      <img src={image} alt={tags} />
    </li>
  );
};
