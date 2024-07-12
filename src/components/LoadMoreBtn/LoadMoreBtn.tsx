import React from 'react';
import css from './LoadMoreBtn.module.css';
import { LoadMoreBtnProps } from './LoadMoreBtn.types';

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <button className={css.loadMoreBtn} type="button" onClick={onClick}>
      Load more
    </button>
  );
}

export default LoadMoreBtn;