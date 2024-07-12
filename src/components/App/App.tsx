import { useEffect, useRef, useState } from 'react';
import './App.css';
import fetchImages from '../API/unsplash-api-img';
import { UnsplashImage, UnsplashResponse, ModalParams } from './App.types';
import SearchBar from '../SearchBar/SearchBar';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ImageGallery from '../ImageGallery/ImageGallery';
import ImageModal from '../ImageModal/ImageModal';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import Loader from '../Loader/Loader';

const initialModalParams: ModalParams = {
  isOpen: false,
  url: '',
  description: '',
};

function App() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [images, setImages] = useState<UnsplashImage[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [showLoadMoreBtn, setShowLoadMoreBtn] = useState<boolean>(false);
  const [modalParams, setModalParams] = useState<ModalParams>(initialModalParams);
  const appRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (searchQuery === '') return;

    async function getData() {
      try {
        setIsLoading(true);
        setIsError(false);
        const data: UnsplashResponse = await fetchImages(searchQuery, page);
        setImages(prevImages => [...prevImages, ...data.results]);
        setShowLoadMoreBtn(page < data.total_pages);
      } catch (error) {
        console.error('Error fetching images:', error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, [searchQuery, page]);

  const handleSearch = (newQuery: string) => {
    setSearchQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const handleLoadMoreClick = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleImageClick = ({ urls: { regular }, alt_description }: UnsplashImage) => {
    setModalParams({ isOpen: true, url: regular, description: alt_description || '' });
  };

  const handleModalClose = () => {
    setModalParams(initialModalParams);
  };

  useEffect(() => {
    if (page === 1) return;
    appRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [images, page]);

  return (
    <div ref={appRef}>
      <SearchBar onSearch={handleSearch} />
      {isError && <ErrorMessage />}
      {images.length > 0 && (
        <ImageGallery images={images} onImageClick={handleImageClick} />
      )}
      {images.length > 0 && !isLoading && showLoadMoreBtn && (
        <LoadMoreBtn onClick={handleLoadMoreClick} />
      )}
      {isLoading && <Loader />}
      {modalParams.isOpen && (
        <ImageModal
          url={modalParams.url}
          description={modalParams.description}
          isOpen={modalParams.isOpen}
          onClose={handleModalClose}
        />
      )}
    </div>
  );
}

export default App;

