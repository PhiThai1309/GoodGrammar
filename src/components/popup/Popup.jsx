import "./Popup.css";
import PropTypes from "prop-types";

const Popup = (props) => {
  const { title, closePopup, onYes, closeText, yesText } = props;
  return (
    <div className="popup-overlay" onClick={closePopup}>
      <div className="popup-content">
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
          <path d="M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm0-160q17 0 28.5-11.5T520-480v-160q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640v160q0 17 11.5 28.5T480-440ZM363-120q-16 0-30.5-6T307-143L143-307q-11-11-17-25.5t-6-30.5v-234q0-16 6-30.5t17-25.5l164-164q11-11 25.5-17t30.5-6h234q16 0 30.5 6t25.5 17l164 164q11 11 17 25.5t6 30.5v234q0 16-6 30.5T817-307L653-143q-11 11-25.5 17t-30.5 6H363Zm1-80h232l164-164v-232L596-760H364L200-596v232l164 164Zm116-280Z" />
        </svg> */}
        <img src={require("../../assets/tools.png")} alt="" />
        <h3>{title ? title : "title"}</h3>
        <div className="popup-button">
          <button className="destroy-btn" onClick={closePopup}>
            {closeText ? closeText : "Exit"}
          </button>
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
