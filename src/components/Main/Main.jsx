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
        />
      )}
    </main>
  );
}

export default Main;
