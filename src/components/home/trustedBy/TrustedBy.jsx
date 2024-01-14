import "./TrustedBy.css";

const TrustedBy = () => {
  return (
    <div className="trusted_by_container max-width">
      <div className="trusted_by_background">
        {/* <div className="trusted_by_heading"> */}
        <p>Trusted by</p>
        {/* </div> */}
        <img src={require("../../../assets/RMIT_University.png")} alt="" />
        <img src={require("../../../assets/RMIT_University.png")} alt="" />
        <img src={require("../../../assets/RMIT_University.png")} alt="" />
        <img src={require("../../../assets/RMIT_University.png")} alt="" />
        {/* <div className="trusted_by_logos"></div> */}
      </div>
    </div>
  );
};

export default TrustedBy;
