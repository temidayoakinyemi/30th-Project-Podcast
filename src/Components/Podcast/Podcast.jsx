import React from 'react'
import "./Podcast.css"
import line_curve from "../../assets/line curve.png"
import arrowright from "../../assets/arrow-right.png";
import podcast_1 from "../../assets/Podcast 1.png"
import podcast_2 from "../../assets/Podcast 2.png";
import podcast_3 from "../../assets/Podcast 3.png";
import podcast_4 from "../../assets/Podcast 4.png";
import podcast_5 from "../../assets/Podcast 5.png";
import podcast_6 from "../../assets/Podcast 6.png";
import podcast_7 from "../../assets/Podcast 7.png";
import podcast_8 from "../../assets/Podcast 8.png";

const Podcast = () => {
  return (
    <div className="podcast container">
      <div className="all">
        <div className="hl-img">
          <h1 className="podcast-h1">
            Best podcast <br /> by channel
          </h1>
          <img className="line" src={line_curve} alt="" />
        </div>
        <div className="all-pp-img">
          <p className="podcast-p">
            Explore and share an extensive collection of high-quality <br />{" "}
            audio from artists and creators around the world.
          </p>
          <div className="p-img">
            <p className="podcast-pp">EXPLORE ALL</p>
            <img src={arrowright} alt="" className="arrow-1" />
          </div>
        </div>
      </div>
      <div className="all-imgp-1">
        <img src={podcast_1} alt="" />
        <img src={podcast_2} alt="" />
        <img src={podcast_3} alt="" />
        <img src={podcast_4} alt="" />
      </div>

      <div className="all-imgp-2">
        <img src={podcast_5} alt="" />
        <img src={podcast_6} alt="" />
        <img src={podcast_7} alt="" />
        <img src={podcast_8} alt="" />
      </div>
    </div>
  );
}

export default Podcast