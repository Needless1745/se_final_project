import NewsCard from "../NewsCard/NewsCard";

function SearchResults({ articles }) {
  return (
    <section className="search__results">
      <h2 className="search__results-title">Search results</h2>
      <div className="search__Results-grid">
        {articles.map((article) => (
          <NewsCard key={article.url} {...article} />
        ))}
      </div>

      <button type="button" className="search__results-more-btn">
        Show more
      </button>
    </section>
  );
}

export default SearchResults;
