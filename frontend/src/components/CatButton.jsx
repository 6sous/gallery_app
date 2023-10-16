import React from "react";
import "./CatButton.scss";
import PropTypes from "prop-types";

function CatButton({ cat, setButtonValue }) {
  const handleClick = (e) => {
    setButtonValue(e.target.value);
  };

  return (
    <button
      value={cat}
      type="button"
      className="cat-button"
      onClick={handleClick}
    >
      {cat}
    </button>
  );
}

export default CatButton;

// proptypes here
CatButton.propTypes = {
  setButtonValue: PropTypes.func.isRequired,
  cat: PropTypes.string.isRequired,
};
