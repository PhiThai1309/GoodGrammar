import "./Popup.css";

const Popup = (props) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h1>Popup</h1>
        <button onClick={props.closePopup}>close me</button>
        <button onClick={props.onYes}>Yes!!</button>
      </div>
    </div>
  );
};

export default Popup;
