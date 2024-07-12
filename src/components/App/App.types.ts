export interface UnsplashImage {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description?: string;
  user: {
    name: string;
  };
  likes: number;
}

export interface UnsplashResponse {
  total: number;
  total_pages: number;
  results: UnsplashImage[];
}

export interface ModalParams {
  isOpen: boolean;
  url: string;
  description: string;
}
