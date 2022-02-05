import React from 'react'
import reactDom from 'react-dom'
import {IoClose} from 'react-icons/io5'

const portalRoot = document.getElementById('root')

const Modal = ({setShowModal, title, children}) => {
  return reactDom.createPortal(
    <div className="modal-overlay" >
        <div className="modal-overlay__modal">
            <div className="modal-overlay__modal__modal-titulo">
                <h2>{title}</h2>
                <div className="modal-overlay__modal__modal-titulo__close-icon">
                    <IoClose onClick={() => setShowModal(false)} />
                </div>
            </div>
            <div className="modal-overlay__modal__data">
                {children}
            </div>
        </div>
    </div>,
    portalRoot,
)
}

export default Modal