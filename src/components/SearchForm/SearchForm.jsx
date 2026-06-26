function SearchForm() {
  return (
    <form className="search__form">
      <input
        type="text"
        className="search__form-input"
        placeholder="Enter Topic"
      />
      <button type="submit" className="search__form-btn">
        Search
      </button>
    </form>
  );
}

export default SearchForm;
