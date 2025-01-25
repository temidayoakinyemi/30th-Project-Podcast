import React from "react";
import "./Access.css";
import iphone_large from "../../assets/Iphone Large.png";
import tick_circle from "../../assets/tick circle.png";
import appstore_black from "../../assets/Appstore black.png"
import google_play_black from "../../assets/Google Play black.png"

const Access = () => {
  return (
    <div className="access ">
      <div className="all-iphone">
        <img src={iphone_large} alt="" className="iphone" />
        <div className="access-div">
          <h1 className="access-h1">
            Get all access in your <br /> hands now
          </h1>
          <div className="all-tick-p">
            <img src={tick_circle} alt="" className="tick" />
            <p className="access-p">
              Easy and powerful tools for content creator. <br /> Podcasting
              never get easier
            </p>
          </div>
          <div className="all-tick-p">
            <img src={tick_circle} alt="" className="tick" />
            <p className="access-p">
              Complete guide to start your podcast channel. <br /> Reach your
              audience effectively.
            </p>
          </div>
          <div className="all-tick-p">
            <img src={tick_circle} alt="" className="tick" />
            <p className="access-p">
              Fully remarkable assistant from our customer <br /> support. 24/7 online.
            </p>
          </div>
          <div className="all-img">
              <img src={appstore_black} alt="" className="appstore-access" />
              <img src={google_play_black} alt="" className="googleplay-access"  />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Access;
