import "./ModalWithForm.css";
import closeIcon from "../../assets/close__icon.png";
import { useEffect } from "react";

function ModalWithForm({
  title,
  name,
  onClose,
  isOpen,
  children,
  onSubmit,
  altBtnText,
  buttonText = "",

  onAltBtnClick,
}) {
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handleEscClose(evt) {
      if (evt.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [isOpen, onClose]);
  return (
    <div className={`modal modal_type_${name} ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button type="button" className="modal__close" onClick={onClose}>
          <img
            src={closeIcon}
            alt="Close modal"
            className="modal__close-icon"
          />
        </button>

        <form onSubmit={onSubmit} className="modal__form" name={name}>
          {children}
          <div className="modal__actions">
            {buttonText && (
              <button type="submit" className="modal__submit">
                {buttonText}
              </button>
            )}
          </div>

          {altBtnText && name !== "registration-success" && (
            <div className="modal__switch">
              <span className="modal__alt-text">or</span>

              <button
                type="button"
                className="modal__alt-btn"
                onClick={onAltBtnClick}
              >
                {altBtnText}
              </button>
            </div>
          )}

          {name === "registration-success" && (
            <div className="modal__success-actions">
              <button
                type="button"
                className="modal__alt-btn_type_success"
                onClick={onAltBtnClick}
              >
                {altBtnText}
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
