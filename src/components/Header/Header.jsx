import "./Header.css";
import logo from "../../assets/logo.svg";
import logoutWhite from "../../assets/logoutW.svg";
import logoutBlack from "../../assets/logoutBlack.svg";
import { Link } from "react-router-dom";

function Header({
  isloggedin,
  currentUser,
  handleLoginClick,
  variant,
  handleLogout,
}) {
  return (
    <header className={`header ${variant === "saved" ? "header_saved" : ""}`}>
      <Link
        to="/"
        className="header__logo-link
      "
      >
        <img src={logo} alt="NewsExplorer logo" className="header__logo" />
      </Link>

      <nav className="header__right-side">
        <Link
          to="/"
          className={`home__btn ${variant === "home" ? "header__link_active" : ""}`}
        >
          Home
        </Link>

        {isloggedin ? (
          <>
            <Link
              to="/saved-news"
              className={`saved__articles-btn ${variant === "saved" ? "header__link_active" : ""}`}
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
    </header>
  );
}

export default Header;
