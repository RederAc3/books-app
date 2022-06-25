import React from 'react';
import './modal.scss';

const Modal = props => {
    const { showModal, filter, removeFilter, closeModal } = props;

    const plFilter = () => {
        filter('pl');
    }

    const enFilter = () => {
        filter('en');
    }

    if (!showModal) {
        return null;
    }

    return (
        <>
            <div onClick={closeModal} className="modal-wrapper">
                <div className="modal-container">
                    <h3 className="modal-head">Filtruj</h3>
                    <div className="modal-body">
                        <div className="modal-item">
                            <div className="modal-item-title">Języki:</div>
                            <p onClick={plFilter}>Polski</p>
                            <p onClick={enFilter}>Angielski</p>
                        </div>
                        <div className="modal-actions">
                            <button onClick={removeFilter} className="modal-actions-remove">Usuń filtry</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Modal;