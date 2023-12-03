import "./HomeContact.css";

const HomeContact = () => {
  return (
    <div className="contact_container">
      <div className="contact_wrapper">
        <p className="logo">Good {<br />} Grammar</p>
        <div className="contact_form_wrapper">
          <form>
            <input
              className="contact_form_input"
              type="text"
              id="fname"
              name="fname"
              placeholder="Leave your email address here!"
            />
          </form>
          <button className="contact_form_submit">
            <span class="material-symbols-rounded">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeContact;
