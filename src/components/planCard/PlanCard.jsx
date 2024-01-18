import { useState } from "react";
import "./PlanCard.css";
import PropTypes from "prop-types";

const PlanCard = (props) => {
  const {
    id,
    name,
    svg,
    des,
    price,
    onSubscribeClick,
    onPopupClick,
    currentStatus,
  } = props;

  const subStatus = currentStatus.name === name;

  function debug() {
    console.log("curent: " + currentStatus.price_id);
    console.log(currentStatus);
    console.log("id   " + id);
    // console.log(currentStatus.subscription_id === id);
    // console.log(id);
    // console.log(name);
  }

  return (
    <div
      onClick={() => {
        if (name !== "Free") {
          if (
            currentStatus.price_id !== id &&
            currentStatus.price_id !== undefined
          ) {
            onPopupClick(id);
          } else {
            if (currentStatus.price_id === undefined) {
              onSubscribeClick(id, true);
            } else {
              onSubscribeClick(id, subStatus);
            }
          }
        }
      }}
      className={`plan ${
        currentStatus.price_id === id ||
        (currentStatus.price_id === undefined && name === "Free")
          ? "orange_section_card"
          : ""
      }`}
    >
      {debug()}
      <div className="div_container">
        {props.svg ? <img src={require(`../../assets/${svg}`)} alt="" /> : null}
        <div className="price_text">{price}</div>
      </div>
      <div
        className={`card_below ${
          currentStatus.price_id === id ||
          (currentStatus.price_id === undefined && name === "Free")
            ? "purple"
            : ""
        }`}
      >
        <div className="flex_space_between">
          <h2>{name}</h2>
          <span className="material-symbols-rounded">arrow_forward_ios</span>
        </div>
        <ul>
          {props.des
            ? des.split(".").map((item, index) => {
                return item ? <li key={index}>{item}</li> : null;
              })
            : null}
        </ul>
        {currentStatus.price_id === id ? (
          <div className="centered_align">
            <button
              onClick={() => console.log("Unsubscribe clicked")}
              className="filled-btn green"
            >
              Unsubscribe
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

PlanCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  svg: PropTypes.string.isRequired,
  des: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  currentStatus: PropTypes.object.isRequired,
  subStatus: PropTypes.bool, // Optional color prop
};

export default PlanCard;
