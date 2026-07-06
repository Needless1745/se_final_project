import "./Hero.css";
import SearchForm from "../SearchForm/SearchForm";
import Header from "../Header/Header";

function Hero({ handleLoginClick, onSearch }) {
  return (
    <section className="hero">
      <Header handleLoginClick={handleLoginClick} />
      <div className="hero__content">
        <h1 className="hero__title">What&apos;s going on in the world?</h1>
        <p className="hero__subtitle">
          Find the latest news on any topic and save them in your personal
          account.
        </p>

        <SearchForm onSearch={onSearch} />
      </div>
    </section>
  );
}

export default Hero;
