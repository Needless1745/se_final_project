import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Main from "../Main/Main";
import About from "../About/About";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import SuccessModal from "../SuccessModal/SuccessModal";
import getNews from "../../utils/newsApi";
import SavedNews from "../SavedNews/SavedNews";
import Footer from "../Footer/Footer";

function App() {
  // useEffect(() => {
  //   getNews("react")
  //     .then((data) => {
  //       // console.log(data.articles[1]);
  //     })
  //     .catch(console.error);
  // }, []);

  const [activeModal, setActiveModal] = useState("");
  const [articles, setArticles] = useState([]);
  const closeActiveModal = () => setActiveModal("");

  function handleSearch(query) {
    console.log(query);

    getNews(query)
      .then((data) => {
        console.log(data.articles);
        setArticles(data.articles);
      })
      .catch(console.error);
  }

  const handleLogin = () => {
    console.log("login succesful!");
  };

  const handleRegister = () => {
    console.log("register success!");
    setActiveModal("registration-success");
  };

  const loginModalSwitch = () => {
    console.log("Switching to login...");
    setActiveModal("login");
  };

  const handleLoginClick = () => {
    console.log("opening login modal...");
    setActiveModal("login");
  };

  const registerModalSwitch = () => {
    console.log("Switching to register...");
    setActiveModal("register");
  };

  const signinModal = (evt) => {
    evt.preventDefault();
    setActiveModal("login");
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
                <Main
                  // articles={articles}
                  handleLoginClick={handleLoginClick}
                  onSearch={handleSearch}
                />
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
      <SuccessModal
        isOpen={activeModal === "registration-success"}
        onClose={closeActiveModal}
        signinModal={signinModal}
      />
    </div>
  );
}

export default App;
