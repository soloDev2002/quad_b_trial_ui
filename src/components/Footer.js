import React from "react";
import "../css files/footer.css";
function Footer() {
  return (
    <div className="Footer__container">
      <hr></hr>
      <div className="footer__header">
        <div className="footer__header__left">
          <div>Copyright © 2019</div>
          <div>HodlInfo.com</div>
          <div style={{ display: "flex" }}>
            Developed By&nbsp;<span>QuadBTech</span>
          </div>
        </div>
        <div className="footer__header__right">
          <div>Support</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
