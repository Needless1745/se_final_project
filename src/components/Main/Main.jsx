import "./Main.css";
import Hero from "../Hero/Hero";
import SearchResults from "../SearchResults/SearchResults";
import Preloader from "../Preloader/Preloader";

function Main({ handleLoginClick, onSearch, articles, isLoading }) {
  return (
    <main className="main">
      <Hero handleLoginClick={handleLoginClick} onSearch={onSearch} />

      {isLoading && <Preloader />}

      {!isLoading && articles.length > 0 && (
        <SearchResults articles={articles} />
      )}
    </main>
  );
}

export default Main;
