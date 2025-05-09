import React from 'react';
import PropTypes from 'prop-types';
import './Modal.scss';

const Modal = ({ 
  isOpen, 
  onClose, 
  title, 
  message, 
  primaryButton, 
  secondaryButton 
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      {/* e.stopPropagation() : empèche la fermeture de la modale si on clic dessus
          sinon le onClick de la div parente s'appliquerai */}
      <div className="modal-content" onClick={e => e.stopPropagation()}> 
        <button className="modal-close" onClick={onClose}>
          ✖
        </button>
        <h2 className="modal-title">{title}</h2>
        <p className="modal-message">{message}</p>
        {(primaryButton || secondaryButton) && (
          //la div n'apparait que si il y a au moins un bouton
          <div className="modal-buttons">
            {secondaryButton && (
              <button className="modal-button secondary" onClick={secondaryButton.onClick} >
                {secondaryButton.text}
              </button>
            )}
            {primaryButton && (
              <button className="modal-button primary" onClick={primaryButton.onClick} >
                {primaryButton.text}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  primaryButton: PropTypes.shape({
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  }),
  secondaryButton: PropTypes.shape({
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  })
};

Modal.defaultProps = {
  primaryButton: null,
  secondaryButton: null
};

export default Modal; 