import "./PlanCard.css";

const PlanCard = (props) => {
  return (
    <div className={`plan ${props.color ? `${props.color}_section_card` : ""}`}>
      <div className="div_container">
        {props.svg}
        <h2>{props.price}</h2>
      </div>
      <div className={`card_below ${props.color}`}>
        <div className="flex_space_between">
          <h3>{props.name}</h3>
          <span className="material-symbols-rounded">arrow_forward_ios</span>
        </div>
        <p>{props.des}</p>
      </div>
    </div>
  );
};

export default PlanCard;
