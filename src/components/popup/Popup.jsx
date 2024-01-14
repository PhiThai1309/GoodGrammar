import "./Popup.css";
import PropTypes from "prop-types";

const Popup = (props) => {
  const { title, closePopup, onYes, closeText, yesText } = props;
  return (
    <div className="popup-overlay" onClick={closePopup}>
      <div className="popup-content">
        <h3>{title}</h3>
        <div className="popup-button">
          {closePopup && (
            <button className="destroy-btn" onClick={closePopup}>
              {closeText ? closeText : "Exit"}
            </button>
          )}
          {onYes && (
            <button className="filled-btn green" onClick={onYes}>
              {yesText ? yesText : "Proceed"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

Popup.propTypes = {
  title: PropTypes.string.isRequired,
  closeText: PropTypes.string,
  yesText: PropTypes.string,
};

export default Popup;
