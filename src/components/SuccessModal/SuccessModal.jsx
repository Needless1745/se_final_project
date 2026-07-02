import React from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./RegisterSuccessModal.css";

function RegisterSuccessModal({ isOpen, onClose, handleLoginClick }) {
  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={onClose}
      name="registration-success"
      title="Registration successfully completed!"
      alternateTextContent={
        <span
          onClick={handleLoginClick}
          className="modal__link-text modal__link-text_center"
        >
          Sign in
        </span>
      }
    ></ModalWithForm>
  );
}

export default RegisterSuccessModal;
