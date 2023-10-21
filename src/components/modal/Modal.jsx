import React, { useEffect } from "react";
import { ModalContent } from "../../helper/constant";

export const Modal = ({ showModal, closeModal, content }) => {
  const getColor = () => {
    switch (content) {
      case ModalContent.Empty:
        return "bg-yellow-200 text-yellow-900 border-yellow-900";
      case ModalContent.Passed:
        return "bg-green-200 text-green-900 border-green-900";
      default:
        return "bg-red-200 text-red-900 border-red-900";
    }
  };

  console.log("content is", content);
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
    <div
      className={`fixed inset-0 flex items-center justify-center h-screen w-screen ${
        showModal ? "block" : "hidden "
      }`}
    >
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div
        className={`${getColor()} w-96 mx-auto w-96 mx-auto p-6 rounded-lg shadow-lg relative`}
      >
        <p>{content}</p>
      </div>
    </div>
  );
};
