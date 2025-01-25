import React from "react";
import "./Strategy.css";
import strategy1 from "../../assets/Strategy1.png";
import strategy2 from "../../assets/Strategy2.png";
import strategy3 from "../../assets/Strategy3.png";
import arrowright from "../../assets/arrow-right.png";
import strategy_star from "../../assets/Strategy Star.png";
import strategy_coin from "../../assets/Strategy Coin.png";
import strategy_flash from "../../assets/Strategy Flash.png";

const Strategy = () => {
  return (
    <div className="strategy container">
      <h1 className="strategy-h1">Let’s build your podcast strategy</h1>
      <p className="strategy-p">
        Discover the limitless podcast category options from various content{" "}
        <br />
        creator around the world lorem ipsum sir dolor amet.
      </p>
      <div className="all-strategy">
          <div className="all-div-img-p1">
              <img src={strategy1} alt="" className="strategy-img" />
              <p className="strategy-img-p">
                How to choose the right <br /> rating for your podcast
              </p>
              <div className="all-strategy-read-img">
                <div className="strategy-img-pdiv">
                  <p className="strategy-p-read">READ MORE</p>
                  <img src={arrowright} alt="" className="strategy-arrow-1" />
                </div>
                <img src={strategy_star} alt="" className="star" />
              </div>
          </div>


          <div className="all-div-img-p2">
              <img src={strategy2} alt="" className="strategy-img" />
              <p className="strategy-img-p">
                Copyrighted Content <br /> Respecting Everyone's Rights
              </p>
              <div className="all-strategy-read-img">
                <div className="strategy-img-pdiv">
                  <p className="strategy-p-read">READ MORE</p>
                  <img src={arrowright} alt="" className="strategy-arrow-1" />
                </div>
                <img src={strategy_coin} alt="" className="star" />
              </div>
          </div>

          <div className="all-div-img-p3">
              <img src={strategy3} alt="" className="strategy-img" />
              <p className="strategy-img-p">
                Live audio that brings <br /> creators and fans together
              </p>
              <div className="all-strategy-read-img">
                <div className="strategy-img-pdiv">
                  <p className="strategy-p-read">READ MORE</p>
                  <img src={arrowright} alt="" className="strategy-arrow-1" />
                </div>
                <img src={strategy_flash} alt="" className="star" />
              </div>
          </div>

      </div>

    </div>
  );
};

export default Strategy;
