import Main from "../Main/Main";
import About from "../About/About";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import Footer from "../Footer/Footer";
import SavedNews from "../SavedNews/SavedNews";
import "./App.css";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const closeActiveModal = () => setActiveModal("");
  const handleLogin = () => {
    console.log("login succesful!");
  };

  const handleRegister = () => {
    setActiveModal("");
  };

  const loginModalSwitch = () => {
    setActiveModal("login");
  };

  const handleLoginClick = () => {
    console.log("opening login modal...");
    setActiveModal("login");
  };

  const registerModalSwitch = () => {
    setActiveModal("register");
  };
  console.log(activeModal);
  return (
    <div className="page">
      <div className="page__content">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Main handleLoginClick={handleLoginClick} />
                <About />
              </>
            }
          />
          <Route path="/saved-news" element={<SavedNews />} />
        </Routes>
        <Footer />
      </div>
      <LoginModal
        isOpen={activeModal === "login"}
        onClose={closeActiveModal}
        onLogin={handleLogin}
        registerModalSwitch={registerModalSwitch}
        onClick={handleLoginClick}
      />
      <RegisterModal
        isOpen={activeModal === "register"}
        onClose={closeActiveModal}
        onRegister={handleRegister}
        loginModalSwitch={loginModalSwitch}
      />
    </div>
  );
}

export default App;
