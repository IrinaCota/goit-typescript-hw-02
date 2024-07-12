interface Image {
  urls: {
    small: string;
  };
  alt_description?: string;
  user: {
    name: string;
  };
  likes: number;
}

export interface ImageCardProps {
  image: Image;
  onImageClick: () => void;
}