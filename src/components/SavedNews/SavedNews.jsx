import Header from "../Header/Header";

function SavedNews({ isloggedin, currentUser, handleLoginClick }) {
  return (
    <>
      <section className="saved-news">
        <Header
          variant="saved"
          isloggedin={isloggedin}
          currentUser={currentUser}
          handleLoginClick={handleLoginClick}
        />

        <h2 className="saved__news-title">No articles yet</h2>
      </section>
    </>
  );
}

export default SavedNews;
