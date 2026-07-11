import "./SearchResults.css";
import NewsCard from "../NewsCard/NewsCard";

function SearchResults({
  articles,
  visibleCards,
  onShowMore,
  isloggedin,
  handleLoginClick,
}) {
  return (
    <section className="search-results">
      <div className="search-results__container">
        <h2 className="search-results__title">Search results</h2>
        <div className="search-results__grid">
          {articles.slice(0, visibleCards).map((article) => (
            <NewsCard
              key={article.url}
              {...article}
              isloggedin={isloggedin}
              handleLoginClick={handleLoginClick}
            />
          ))}
        </div>

        {visibleCards < articles.length && (
          <button className="search-results__more-btn" onClick={onShowMore}>
            Show more
          </button>
        )}
      </div>
    </section>
  );
}

export default SearchResults;
