import PropTypes from "prop-types";
import css from "./ImageCard.module.css";

const ImageCard = ({ image, onImageClick }) => {
  return (
    <div className={css.imageCard}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className={css.image}
        onClick={onImageClick}
      />
      <ul className={css.descriptions}>
        <li>
          <p>Photo by: {image.user.name}</p>
        </li>
        <li>
          <p>Likes: {image.likes}</p>
        </li>
      </ul>
    </div>
  );
};

ImageCard.propTypes = {
  image: PropTypes.shape({
    urls: PropTypes.shape({
      small: PropTypes.string.isRequired,
    }).isRequired,
    alt_description: PropTypes.string,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageCard;
