import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { ImageGalleryProps } from "./ImageGallery.types";

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onImageClick }) => {
  return (
    <ul className={css.gallery}>
      {images.map((image) => (
        <li className={css.galleryItem} key={image.id}>
          <ImageCard image={image} onImageClick={() => onImageClick(image)} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
