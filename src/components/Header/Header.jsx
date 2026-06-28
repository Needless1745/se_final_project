import "./Header.css";
import logo from "../../assets/logo.svg";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="NewsExplorer logo" className="header__logo" />
      <nav className="header__right-side">
        <button className="home__btn">Home</button>
        <button className="sign__in-btn">Sign in</button>
      </nav>
    </header>
  );
}

export default Header;
