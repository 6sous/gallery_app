import "./DescriptionModal.scss";
import PropTypes from "prop-types";

function DescriptionModal({ name, url, description, category, setIsOpen }) {
  // Generates a random color value between 0 and 255.
  const randomColor = () => {
    const random = Math.floor(Math.random() * 255);
    return random;
  };

  // Generates a random color for tags
  const color = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;

  /**
|--------------------------------------------------
| return du composant
|--------------------------------------------------
*/

  return (
    <div className="description-modal">
      <button
        type="button"
        className="close-btn"
        onClick={() => {
          setIsOpen(false);
        }}
      >
        <i className="fi fi-rr-cross-small" />
      </button>
      <img src={url} alt={name} />
      <div className="content">
        <header className="header">
          <h2>{name}</h2>
          <div
            className="tag"
            style={{
              backgroundColor: color,
            }}
          >
            {category}
          </div>
        </header>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default DescriptionModal;

DescriptionModal.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};
