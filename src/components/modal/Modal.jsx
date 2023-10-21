import React, { useEffect } from "react";

export const Modal = ({ showModal, closeModal, content }) => {
  useEffect(() => {
    let timeout;
    if (showModal) {
      timeout = setTimeout(() => {
        closeModal();
      }, 5000);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [showModal, closeModal]);

  return (
    <div className={`fixed inset-0 z-50 ${showModal ? "block" : "hidden"}`}>
      <div className="modal-overlay"></div>
      <div className="modal-container bg-white w-96 mx-auto mt-20 p-6 rounded-lg shadow-lg">
        <div className="text-xl font-bold mb-4">Modal Content</div>
        <p>{content}</p>
      </div>
    </div>
  );
};
