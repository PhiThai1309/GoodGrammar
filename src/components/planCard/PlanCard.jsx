import "./PlanCard.css";

const PlanCard = (props) => {
  return (
    <div className={`plan ${props.color ? `${props.color}_section_card` : ""}`}>
      {props.svg}
      <div className={`card_below ${props.color}`}>
        <div className="flex_space_between">
          <h3>{props.name}</h3>
          <span className="material-symbols-rounded">arrow_forward_ios</span>
        </div>
        <p>Some perks included!</p>
      </div>
    </div>
  );
};

export default PlanCard;
