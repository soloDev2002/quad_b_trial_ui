import React from "react";
import "../css files/bestPricesToTrade.css";
function BestPricesToTrade({ darkTheme }) {
  return (
    <div className="best__price__container">
      <h3>Best Price To Trade</h3>
      <div className="values">
        <div className="grp">
          <h3>0.02%</h3>
          <p>5 Mins</p>
        </div>
        <div className="grp">
          <h3>0.82%</h3>
          <p>1 Hour</p>
        </div>
        <div className="money_amt">
          <h3 className={`${!darkTheme && "lightTheme"}`}>₹&nbsp;46,63,710</h3>
          <p>Average BTC/INR net price including commission</p>
        </div>
        <div className="grp">
          <h3>9.54</h3>
          <p>1 Days</p>
        </div>
        <div className="grp">
          <h3>18.67%</h3>
          <p>7 Days</p>
        </div>
      </div>
      <div className="image__holder">
        <img
          width="100%"
          src="https://hodlinfo.com/static/media/cryptonews.54869ee3.png"
          alt="crypto_currency_image"
        />
      </div>
    </div>
  );
}

export default BestPricesToTrade;
