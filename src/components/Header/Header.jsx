import "./Header.css";
import logo from "../../assets/logo.svg";
import logoutWhite from "../../assets/logoutW.svg";
import logoutBlack from "../../assets/logoutBlack.svg";
import menuW from "../../assets/menuW.svg";
import closemenuW from "../../assets/closemenuW.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

function Header({
  isloggedin,
  currentUser,
  handleLoginClick,
  variant,
  handleLogout,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className={`header ${variant === "saved" ? "header_saved" : ""}`}>
        <Link to="/" className="header__logo-link">
          <img src={logo} alt="NewsExplorer logo" className="header__logo" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="header__right-side">
          <Link
            to="/"
            className={`home__btn ${
              variant === "home" ? "header__link_active" : ""
            }`}
          >
            Home
          </Link>

          {isloggedin ? (
            <>
              <Link
                to="/saved-news"
                className={`saved__articles-btn ${
                  variant === "saved" ? "header__link_active" : ""
                }`}
              >
                Saved articles
              </Link>

              <button
                className="logout__btn"
                type="button"
                onClick={handleLogout}
              >
                {currentUser?.name || "Elise"}

                <img
                  src={variant === "saved" ? logoutBlack : logoutWhite}
                  alt=""
                  aria-hidden="true"
                  className="logout__logo"
                />
              </button>
            </>
          ) : (
            <button
              className="sign__in-btn"
              type="button"
              onClick={handleLoginClick}
            >
              Sign in
            </button>
          )}
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="header__menu-btn"
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <img
            src={isMenuOpen ? closemenuW : menuW}
            alt={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </button>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div
            className={`header__mobile-menu ${
              variant === "saved" ? "header__mobile-menu_saved" : ""
            }`}
          >
            <nav className="header__mobile-nav">
              <Link
                to="/"
                className="header__mobile-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>

              {isloggedin ? (
                <>
                  <Link
                    to="/saved-news"
                    className="header__mobile-link"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Saved articles
                  </Link>

                  <button
                    className="logout__btn header__mobile-btn"
                    type="button"
                    onClick={() => {
                      handleLogout();
                      setIsMenuOpen(false);
                    }}
                  >
                    {currentUser?.name || "Elise"}

                    <img
                      src={variant === "saved" ? logoutBlack : logoutWhite}
                      alt=""
                      aria-hidden="true"
                      className="logout__logo"
                    />
                  </button>
                </>
              ) : (
                <button
                  className="sign__in-btn header__mobile-btn"
                  type="button"
                  onClick={() => {
                    setIsMenuOpen(false);
                    handleLoginClick();
                  }}
                >
                  Sign in
                </button>
              )}
            </nav>
          </div>
        )}
      </header>
    </>
  );
}

export default Header;
