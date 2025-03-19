import React, { useState } from "react";

function Modal() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button type="button" className="btn btn-primary" onClick={handleOpenModal}>
        Open Modal
      </button>

      {showModal && (
        <div className="modal show" tabindex="-1" style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Modal title</h5>
                <button type="button" className="btn-close" onClick={handleCloseModal} aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <p>Modal body text goes here.</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>
                  Close
                </button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
