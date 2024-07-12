import React from "react";
import css from "./ImageCard.module.css";
import { ImageCardProps } from "./ImageCard.types";

const ImageCard: React.FC<ImageCardProps> = ({ image, onImageClick }) => {
  return (
    <div className={css.imageCard}>
      <img
        src={image.urls.small}
        alt={image.alt_description || "Image"}
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

export default ImageCard;
