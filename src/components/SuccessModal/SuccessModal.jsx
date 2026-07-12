import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./SuccessModal.css";

function RegisterSuccessModal({ isOpen, onClose, signinModal }) {
  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={onClose}
      name="registration-success"
      title="Registration successfully completed!"
      altBtnText="Sign in"
      onAltBtnClick={signinModal}
    ></ModalWithForm>
  );
}

export default RegisterSuccessModal;
