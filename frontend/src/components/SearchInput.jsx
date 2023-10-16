import "./SearchInput.scss";
import PropTypes from "prop-types";

function SearchInput({ setSearchValue, setButtonValue }) {
  // réinitialisation de la valeur du state buttonValue et mise à jour la valeur du state searchValue
  const handleChange = (e) => {
    setButtonValue("");
    setSearchValue(e.target.value.toLowerCase());
  };

  /**
  |--------------------------------------------------
  | return du composant
  |--------------------------------------------------
  */

  return (
    <label className="search-label" htmlFor="search">
      <input
        type="text"
        id="search"
        className="search-input"
        onChange={handleChange}
      />
      <i className="fi fi-br-search" />
    </label>
  );
}

export default SearchInput;

SearchInput.propTypes = {
  setSearchValue: PropTypes.func.isRequired,
  setButtonValue: PropTypes.func.isRequired,
};
