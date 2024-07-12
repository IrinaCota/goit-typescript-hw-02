import { BsSearch } from 'react-icons/bs';
import toast, { Toaster } from 'react-hot-toast';
import React from 'react';
import css from './SearchBar.module.css';
import { SearchBarProps } from './SearchBar.types';

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const query = (form.elements.namedItem('searchQuery') as HTMLInputElement).value.trim();
    if (query === '') {
      toast.error('Input cannot be empty!');
    } else {
      onSearch(query);
    }
    form.reset();
  };

  return (
    <header className={css.header}>
      <Toaster />
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <input
          className={css.input}
          name="searchQuery"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.searchBtn} type="submit">
          <BsSearch className={css.searchIcon} />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
