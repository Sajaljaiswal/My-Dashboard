import React from "react";
import "./entireCss.css";
const Footer = (props) => {
  return (
    <>
      <div className="footer">
        <div className="main-footer">
          <div className="box-1">
            <h1>Divya Computer Institute</h1>
            <p>
              Lorem ipsum dolor, sit amet <br /> consectetur adipiscing elit.
            </p>
          </div>
          <div className="box-2">
            <p>Subcribe to get important updates</p>
            <input
              type="mail"
              name="mail"
              autoComplete="off"
              placeholder="YOUR E-MAIL"
              className="your-mail"
            />
            <br /> <br />
            <button className="Btn"> SUBSCRIBE</button>
          </div>
          <div className="box-3">
            <p> Follow Us</p>
            <div className="icons">
              <a href="#" className="fa fa-facebook   iconN"></a>
              <a href="#" className="fa fa-twitter iconN"></a>
              <a href="#" className="fa fa-instagram iconN"></a>
            </div>
          </div>
          <div className="box-4">
            <p>Call Us</p> <p> +91 988989823</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
