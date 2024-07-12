import React from 'react';
import ReactModal from 'react-modal';
import css from './ImageModal.module.css';
import { ImageModalProps } from './ImageModal.types';

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, url, description }) => {
  return (
    <ReactModal
      className={css.modal}
      overlayClassName={css.overlay}
      isOpen={isOpen}
      shouldCloseOnEsc={true}
      ariaHideApp={false}
      onRequestClose={onClose}
    >
      <img className={css.imageModal} src={url} alt={description} />
    </ReactModal>
  );
};

export default ImageModal;