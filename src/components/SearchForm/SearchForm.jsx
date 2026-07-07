import { useState } from "react";
import "./SearchForm.css";

function SearchForm({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  function handleChange(evt) {
    setSearchQuery(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    if (!searchQuery.trim()) {
      return;
    }

    onSearch(searchQuery.trim());
  }
  return (
    <form className="search__form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="search__form-input"
        placeholder="Enter Topic"
        value={searchQuery}
        onChange={handleChange}
        required
      />
      <button type="submit" className="search__form-btn">
        Search
      </button>
    </form>
  );
}

export default SearchForm;
