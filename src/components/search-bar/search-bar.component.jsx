import "./search-bar.component.css";

const SearchBar = ({ className, placeholder, onSearchHandler }) => (
  <input
    className={`search-bar ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={onSearchHandler}
  />
);

export default SearchBar;
