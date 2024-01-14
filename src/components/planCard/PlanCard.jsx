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

  const subStatus = currentStatus === name;

  return (
    <div
      onClick={() => {
        if (name !== "Free") {
          if (currentStatus !== name && currentStatus !== "Free") {
            onPopupClick(id);
          } else {
            if (currentStatus === "Free") {
              onSubscribeClick(id, true);
            } else {
              onSubscribeClick(id, subStatus);
            }
          }
        }
      }}
      className={`plan ${subStatus ? "orange_section_card" : ""}`}
    >
      <div className="div_container">
        {props.svg ? <img src={require(`../../assets/${svg}`)} alt="" /> : null}
        <div className="price_text">{price}</div>
      </div>
      <div className={`card_below ${subStatus ? "orange" : ""}`}>
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
        {subStatus && name !== "Free" && (
          <div className="centered_align">
            <button
              onClick={() => console.log("Unsubscribe clicked")}
              className="filled-btn green"
            >
              Unsubscribe
            </button>
          </div>
        )}
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
  currentStatus: PropTypes.string.isRequired,
  subStatus: PropTypes.bool, // Optional color prop
};

export default PlanCard;
