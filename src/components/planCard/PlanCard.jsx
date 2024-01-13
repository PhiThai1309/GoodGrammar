import "./PlanCard.css";
import PropTypes from "prop-types";

const PlanCard = (props) => {
  const { name, svg, des, price, color } = props;
  return (
    <div className={`plan ${color ? `${color}_section_card` : ""}`}>
      <div className="div_container">
        {props.svg ? <img src={require(`../../assets/${svg}`)} alt="" /> : null}
        <h2>{price}</h2>
      </div>
      <div className={`card_below ${color}`}>
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
      </div>
    </div>
  );
};

PlanCard.propTypes = {
  name: PropTypes.string.isRequired,
  svg: PropTypes.string.isRequired,
  des: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  color: PropTypes.string, // Optional color prop
};

export default PlanCard;
