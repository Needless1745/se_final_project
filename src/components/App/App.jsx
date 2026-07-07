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
  const [activeModal, setActiveModal] = useState("");
  const [articles, setArticles] = useState([]);
  const [visibleCards, setVisibleCards] = useState(3);
  const [isLoading, setIsLoading] = useState(false);
  const closeActiveModal = () => setActiveModal("");

  function handleSearch(query) {
    setVisibleCards(3);
    setIsLoading(true);

    getNews(query)
      .then((data) => {
        console.log(data.articles);
        setArticles(data.articles);
      })
      .catch(console.error)
      .finally(() => {
        setIsLoading(false);
      });
  }

  const handleShowMore = () => {
    setVisibleCards((prev) => prev + 3);
  };

  const handleLogin = () => {
    // console.log("login succesful!");
  };

  const handleRegister = () => {
    // console.log("register success!");
    setActiveModal("registration-success");
  };

  const loginModalSwitch = () => {
    // console.log("Switching to login...");
    setActiveModal("login");
  };

  const handleLoginClick = () => {
    // console.log("opening login modal...");
    setActiveModal("login");
  };

  const registerModalSwitch = () => {
    // console.log("Switching to register...");
    setActiveModal("register");
  };

  const signinModal = (evt) => {
    evt.preventDefault();
    setActiveModal("login");
  };

  // console.log(activeModal);
  return (
    <div className="page">
      <div className="page__content">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Main
                  articles={articles}
                  handleLoginClick={handleLoginClick}
                  onSearch={handleSearch}
                  isLoading={isLoading}
                  visibleCards={visibleCards}
                  handleShowMore={handleShowMore}
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
