import Header from "../Header/Header";
import NewsCard from "../NewsCard/NewsCard";
import "./SavedNews.css";

function SavedNews({
  isloggedin,
  currentUser,
  handleLoginClick,
  savedArticles,
  onDeleteArticle,
  handleLogout,
}) {
  return (
    <main className="saved-news">
      <Header
        variant="saved"
        isloggedin={isloggedin}
        currentUser={currentUser}
        handleLoginClick={handleLoginClick}
        handleLogout={handleLogout}
      />

      <section className="saved-news__info">
        <p className="saved-news__label">Saved articles</p>

        {savedArticles.length === 0 ? (
          <h1 className="saved-news__title">No articles yet</h1>
        ) : (
          <>
            <h1 className="saved-news__title">
              {currentUser.name}, you have {savedArticles.length} saved{" "}
              {savedArticles.length === 1 ? "article" : "articles"}
            </h1>
          </>
        )}
      </section>

      {savedArticles.length > 0 && (
        <section className="saved-news__cards">
          {savedArticles.map((article) => (
            <NewsCard
              key={article.url}
              {...article}
              isSaved={true}
              isSavedPage={true}
              onDeleteArticle={() => onDeleteArticle(article)}
              isloggedin={isloggedin}
            />
          ))}
        </section>
      )}
    </main>
  );
}

export default SavedNews;
