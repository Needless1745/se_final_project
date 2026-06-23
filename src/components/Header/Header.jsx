import "./Header.css";
import logo from "../../assets/logo.svg";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="" className="header__logo" />
      <div className="header__right__side">
        <button className="home__btn">Home</button>
        <button className="sign__in-btn">Sign in</button>
      </div>
    </header>
  );
}

export default Header;
