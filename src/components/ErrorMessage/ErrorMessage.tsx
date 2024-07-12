import React from 'react';
import css from './ErrorMessage.module.css';

const ErrorMessage: React.FC = () => {
  return (
    <p className={css.message}>Something went wrong. Please try again later.</p>
  );
};

export default ErrorMessage;
