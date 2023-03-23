import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.scss';

const Backdrop = props => {
  return <div className="modal__backdrop" onClick={props.hideModal} />;
};

const ModalOverlay = props => {
  return <div className={`modal ${props.className}`}>{props.children}</div>;
};

const portalElement = document.getElementById('overlays');

const Modal = props => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop hideModal={props.hideModal} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay className={props.className}>
          {props.children}
        </ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
