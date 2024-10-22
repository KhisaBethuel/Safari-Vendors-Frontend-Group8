import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
            <div className="bg-white p-5 rounded shadow-md">
                <button onClick={onClose} className="mb-4 flex right-0">X</button>
                {children}
            </div>
        </div>
    );
};

export default Modal;