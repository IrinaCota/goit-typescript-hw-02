// ../API/unsplash-api-img.js
import axios from 'axios';

const API_KEY = 'hRFnwZ4MYV-reFyjPjBPWTyXpLdf4IU5FZ8VGMthKGI';
axios.defaults.baseURL = 'https://api.unsplash.com/';

async function fetchImages(searchQuery, page) {
  try {
    const response = await axios.get('/search/photos', {
      params: {
        client_id: API_KEY,
        query: searchQuery,
        page,
        per_page: 16,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Error fetching images from Unsplash API');
  }
}

export default fetchImages;



    