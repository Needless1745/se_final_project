import "./Hero.css";
import SearchForm from "../SearchForm/SearchForm";
// main__search == msearch

function Hero() {
  return (
    <section className="main__search">
      <div className="search__content">
        <h1 className="ms__title">What's going on in the world?</h1>
        <p className="ms__subtitle">
          Find the latest news on any topic and save them in your personal
          account.
        </p>

        <SearchForm />
      </div>
    </section>
  );
}

export default Hero;
