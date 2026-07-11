import "./Header.css";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

function Header({ isloggedin, currentUser, handleLoginClick }) {
  console.log("Header isLoggedIn:", isloggedin);
  return (
    <header className="header">
      <img src={logo} alt="NewsExplorer logo" className="header__logo" />

      <nav className="header__right-side">
        <Link to="/" className="home__btn">
          Home
        </Link>

        {isloggedin ? (
          <>
            <Link to="/saved-news" className="saved__articles-btn">
              Saved articles
            </Link>

            <button className="logout__btn" type="button">
              {currentUser?.name}
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
