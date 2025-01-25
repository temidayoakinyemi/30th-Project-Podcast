import React from "react";
import "./Channel.css";
import song1 from "../../assets/Song1.png";
import song2 from "../../assets/Song2.png";
import song3 from "../../assets/Song3.png";
import arrowright from "../../assets/arrow-right.png";

const Channel = () => {
  return (
    <div className="channel">
      <div className="channel-all">
        <img className="song" src={song1} alt="" />
        <img className="song" src={song2} alt="" />
        <img className="song" src={song3} alt="" />
        <img className="arrow" src={arrowright} alt="" />
      </div>
    </div>
  );
};

export default Channel;
