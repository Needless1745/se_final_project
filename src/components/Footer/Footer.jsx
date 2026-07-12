import "./Footer.css";
import githubIcon from "../../assets/github.svg";
import linkedinIcon from "../../assets/Linkedin.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__copyright">
          <p className="copyright__text">
            &copy; 2026 SuperSite, Powered by News API
          </p>
        </div>
        <div className="footer__right-side">
          <nav className="footer__nav-links">
            <a href="/" className="footer__link">
              Home
            </a>
            <a href="https://tripleten.com" className="footer__link">
              TripleTen
            </a>
          </nav>
          <nav className="footer__icons">
            <a href="https://github.com/Needless1745" className="footer__icon">
              <img
                src={githubIcon}
                alt="github icon"
                className="github__icon social__icon"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/jose-s-9795bb123/"
              className="footer__icon"
            >
              <img
                src={linkedinIcon}
                alt="Linkedin icon"
                className="linkedin__icon social__icon"
              />
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
