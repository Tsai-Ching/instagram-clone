import React from 'react';
import Modal from 'react-bootstrap/Modal';

function PopUpModal({ onHide, show, modalComponent }) {
    return (
        <Modal
            dialogclassName="main-modal"
            show={show}
            onHide={onHide}
        >
            <Modal.Header closeButton className="modal-header" />
            <Modal.Body className="show-grid bg-transparent center">
                {modalComponent} {/* 動態呈現的組件 */}
            </Modal.Body>
        </Modal>
    );
}

export default PopUpModal;