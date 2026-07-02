import "./Hero.css";
import SearchForm from "../SearchForm/SearchForm";
import Header from "../Header/Header";

function Hero({ handleLoginClick }) {
  return (
    <section className="hero">
      <div className="hero__content">
        <Header handleLoginClick={handleLoginClick} />

        <h1 className="hero__title">What&apos;s going on in the world?</h1>
        <p className="hero__subtitle">
          Find the latest news on any topic and save them in your personal
          account.
        </p>

        <SearchForm />
      </div>
    </section>
  );
}

export default Hero;
