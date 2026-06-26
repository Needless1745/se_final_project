import "./Hero.css";
import SearchForm from "../SearchForm/SearchForm";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__title">What's going on in the world?</h1>
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
