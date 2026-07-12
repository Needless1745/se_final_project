import "./App.css";
import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

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
  const [savedArticles, setSavedArticles] = useState([]);
  const [isSaved, setIsSaved] = useState(false);
  const [visibleCards, setVisibleCards] = useState(3);
  const [isLoading, setIsLoading] = useState(false);
  const [isloggedin, setisloggedin] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const closeActiveModal = () => setActiveModal("");
  const navigate = useNavigate();

  function handleSearch(query) {
    setVisibleCards(3);
    setIsLoading(true);

    getNews(query)
      .then((data) => {
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

  const handleLogin = ({ email }) => {
    closeActiveModal();
    setisloggedin(true);
    const username = email.split("@")[0];
    const formattedName = username.charAt(0).toUpperCase() + username.slice(1);

    setCurrentUser({ name: formattedName });
  };

  const handleRegister = () => {
    setActiveModal("registration-success");
  };

  const loginModalSwitch = () => {
    setActiveModal("login");
  };

  const handleLoginClick = () => {
    setActiveModal("login");
  };

  const registerModalSwitch = () => {
    setActiveModal("register");
  };

  const signinModal = (evt) => {
    evt.preventDefault();
    setActiveModal("login");
  };

  function handleSaveArticle(article) {
    setSavedArticles((prev) => {
      const alreadySaved = prev.some((saved) => saved.url === article.url);

      if (alreadySaved) {
        return prev;
      }

      return [...prev, article];
    });
  }

  function handleDeleteArticle(article) {
    setSavedArticles((prev) =>
      prev.filter((saved) => saved.url !== article.url),
    );
  }

  function handleLogout() {
    console.log("logging out...");
    setisloggedin(false);
    setCurrentUser({});
    setSavedArticles([]);
    setIsSaved(false);
    navigate("/");
  }

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
                  isloggedin={isloggedin}
                  currentUser={currentUser}
                  savedArticles={savedArticles}
                  handleDeleteArticle={handleDeleteArticle}
                  handleSaveArticle={handleSaveArticle}
                  handleLogout={handleLogout}
                />
                <About />
              </>
            }
          />
          <Route
            path="/saved-news"
            element={
              <SavedNews
                isloggedin={isloggedin}
                currentUser={currentUser}
                savedArticles={savedArticles}
                onSaveArticle={handleSaveArticle}
                onDeleteArticle={handleDeleteArticle}
                handleLoginClick={handleLoginClick}
                handleLogout={handleLogout}
                isSaved={isSaved}
              />
            }
          />
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
