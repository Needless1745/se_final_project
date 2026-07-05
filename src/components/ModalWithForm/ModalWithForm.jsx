import "./ModalWithForm.css";
import closeIcon from "../../assets/close__icon.png";

function ModalWithForm({
  title,
  name,
  onClose,
  isOpen,
  children,
  onSubmit,
  altBtnText,
  buttonText = "",
  buttonClassName = "",
  onAltBtnClick,
}) {
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
              <button
                type="submit"
                className="modal__submit ${buttonClassName}"
              >
                {buttonText}
              </button>
            )}
            {altBtnText && (
              <button
                type="button"
                className="modal__alt-btn modal__alt-btn_type_success"
                onClick={onAltBtnClick}
              >
                {altBtnText}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
