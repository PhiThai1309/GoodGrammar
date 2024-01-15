import "./HomeFooter.css";
const HomeFooter = (props) => {
  const RunningText = () => {
    if (props.disable) {
      return null;
    } else {
      return (
        <div className="running_word_wrapper">
          <div className="text">
            <span>READY TO REFINE YOUR WRITING?</span>
            <span>READY TO REFINE YOUR WRITING?</span>
            <span>READY TO REFINE YOUR WRITING?</span>
            <span>READY TO REFINE YOUR WRITING?</span>
            <span>READY TO REFINE YOUR WRITING?</span>
          </div>
          <div className="text">
            <span>READY TO REFINE YOUR WRITING?</span>
            <span>READY TO REFINE YOUR WRITING?</span>
            <span>READY TO REFINE YOUR WRITING?</span>
            <span>READY TO REFINE YOUR WRITING?</span>
            <span>READY TO REFINE YOUR WRITING?</span>
          </div>
        </div>
      );
    }
  };
  return (
    <>
      {RunningText()}
      <div className="footer_wrapper">
        <p className="footer_name">©23</p>
        <div className="footer_container">
          <div className="footer_logo">
            <p className="logo">Good {<br />} Grammar</p>
          </div>
          <div className="footer_name_wrapper">
            <ul>
              <li>Team name</li>
              <li>Thai Manh Phi</li>
              <li>Nguyen Vu Minh Duy</li>
              <li>Le Minh Quan</li>
              <li>Trieu Hoang Khang</li>
              <li>Thieu Thuc</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeFooter;
