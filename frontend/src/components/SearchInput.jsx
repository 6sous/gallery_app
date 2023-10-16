import "./SearchInput.scss";
import PropTypes from "prop-types";

function SearchInput({ setSearchValue, setButtonValue }) {
  const handleChange = (e) => {
    setButtonValue("");
    setSearchValue(e.target.value.toLowerCase());
  };

  return (
    <label className="search-label">
      <input className="search-input" type="text" onChange={handleChange} />
    </label>
  );
}

export default SearchInput;

SearchInput.propTypes = {
  setSearchValue: PropTypes.func.isRequired,
  setButtonValue: PropTypes.func.isRequired,
};
