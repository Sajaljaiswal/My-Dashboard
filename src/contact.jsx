import React from "react";
import "./entireCss.css";
const Contact = () => {
  return (
    <div className="wrapper">
      <header>Contact US</header>
      <form action="">
        <div className="field">
          <div className="input-area">
            <input type="text" placeholder="Name" />
          </div>
        </div>
        <div className="field email">
          <div className="input-area">
            <input type="email" placeholder="Email Address" />
          </div>
          <div className="error error-txt">Email can't be blank</div>
        </div>
        <div className="field input-area">
          <textarea name="textarea" id="" cols="42" rows="6" placeholder="Enter your Message here"></textarea>

        </div>
        <a href="form.html">
          <input type="submit" value="Submit" />
        </a>
      </form>
    </div>
  );
};

export default Contact;
