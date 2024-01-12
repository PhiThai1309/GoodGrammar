import "./PlanCard.css";

const PlanCard = (props) => {
  return (
    <div className={`plan ${props.color ? `${props.color}_section_card` : ""}`}>
      <div className="div_container">
        {props.svg ? (
          <img src={require(`../../assets/${props.svg}`)} alt="" />
        ) : null}
        <h2>{props.price}</h2>
      </div>
      <div className={`card_below ${props.color}`}>
        <div className="flex_space_between">
          <h3>{props.name}</h3>
          <span className="material-symbols-rounded">arrow_forward_ios</span>
        </div>
        <ul>
          {props.des
            ? props.des.split(".").map((item, index) => {
                return item ? <li key={index}>{item}</li> : null;
              })
            : null}
        </ul>
      </div>
    </div>
  );
};

export default PlanCard;
