import css from './ImadeGallery.module.css'

export const ImageGalleryItem = ({ image, tags, id, largeImage }) => {

  return (
    <li class={css.photo}>
      <img id={id} src={image} alt={tags} largeImage={largeImage} />
    </li>
  );
};
