import axios from 'axios';
import { Params, UnsplashResponse } from './unsplash-api.types';

const API_KEY = 'hRFnwZ4MYV-reFyjPjBPWTyXpLdf4IU5FZ8VGMthKGI';
axios.defaults.baseURL = 'https://api.unsplash.com/';

async function fetchImages(searchQuery: string, page: number): Promise<UnsplashResponse> {
  const response = await axios.get<UnsplashResponse>('/search/photos', {
    params: <Params> {
      client_id: API_KEY,
      query: searchQuery,
      page,
      per_page: 12,
    },
  });
  return response.data;
}

export default fetchImages;

    