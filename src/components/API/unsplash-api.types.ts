export interface Params {
  client_id: string;
  query: string;
  page: number;
  per_page: number;
}

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
