import ReactModal from "react-modal";
import PropTypes from 'prop-types';
import css from "./ImageModal.module.css";

const ImageModal = ({ isOpen, onClose, url, description }) => {
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

ImageModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string,
};