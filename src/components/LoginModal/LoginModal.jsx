import { useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const defaultValues = {
  email: "",
  password: "",
};

const LoginModal = ({ isOpen, onClose, onLogin, registerModalSwitch }) => {
  const { values, setValues, handleChange } = useForm(defaultValues);

  useEffect(() => {
    if (!isOpen) {
      setValues(defaultValues);
    }
  }, [isOpen]);

  function handleSubmit(evt) {
    evt.preventDefault();
    onLogin(values);
  }

  return (
    <ModalWithForm
      title="Log in"
      name="login"
      buttonText="Log in"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      altBtnText={"or Sign up"}
      onAltBtnClick={registerModalSwitch}
    >
      <label className="modal__label">
        Email
        <input
          className="modal__input"
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          required
        />
      </label>

      <label className="modal__label">
        Password
        <input
          className="modal__input"
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          required
        />
      </label>
    </ModalWithForm>
  );
};

export default LoginModal;
