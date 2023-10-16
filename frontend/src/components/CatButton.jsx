import React from "react";
import "./CatButton.scss";
import PropTypes from "prop-types";

function CatButton({ cat, setButtonValue }) {
  // handleClick permettant de mettre à jour la valeur du state buttonValue en fonction de la valeur de cat
  const handleClick = (e) => {
    setButtonValue(e.target.value);
  };

  /**
|--------------------------------------------------
| return du composant
|--------------------------------------------------
*/

  return (
    <button
      value={
        cat
      } /* value du bouton à partir de laquelle le state buttonValue sera mis à jour */
      type="button"
      className="cat-button"
      onClick={handleClick}
    >
      {cat}
    </button>
  );
}

export default CatButton;

CatButton.propTypes = {
  setButtonValue: PropTypes.func.isRequired,
  cat: PropTypes.string.isRequired,
};
