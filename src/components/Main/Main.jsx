import "./Main.css";
import Hero from "../Hero/Hero";
import SearchResults from "../SearchResults/SearchResults";
import Preloader from "../Preloader/Preloader";

function Main({
  handleLoginClick,
  onSearch,
  articles,
  isLoading,
  visibleCards,
  handleShowMore,
  isloggedin,
  currentUser,
  savedArticles,
  handleDeleteArticle,
  handleSaveArticle,
}) {
  return (
    <main className="main">
      <Hero
        handleLoginClick={handleLoginClick}
        onSearch={onSearch}
        isloggedin={isloggedin}
        currentUser={currentUser}
      />

      {isLoading && <Preloader />}

      {!isLoading && articles.length > 0 && (
        <SearchResults
          articles={articles}
          visibleCards={visibleCards}
          onShowMore={handleShowMore}
          isloggedin={isloggedin}
          handleLoginClick={handleLoginClick}
          savedArticles={savedArticles}
          handleDeleteArticle={handleDeleteArticle}
          handleSaveArticle={handleSaveArticle}
        />
      )}
    </main>
  );
}

export default Main;
