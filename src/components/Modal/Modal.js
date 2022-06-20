import React from 'react';
import './modal.scss';

const Modal = props => {
    const { showModal, closeModal } = props;

    const plFilter = () => {
        closeModal('pl');
    }

    const enFilter = () => {
        closeModal('en');
    }

    if (!showModal) {
        return null;
    }

    return (
        <>
            <div className="modal-container">
                <h3 className="modal-head">Filtruj</h3>
                <div className="modal-body">
                    <div className="modal-item">
                        <div className="modal-item-title">Języki:</div>
                        <p onClick={plFilter}>Polski</p>
                        <p onClick={enFilter}>Angielski</p>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Modal;