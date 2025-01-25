import React from "react";
import "./Category.css";
import line_curve from "../../assets/line curve.png";
import arrowright from "../../assets/arrow-right.png";
import hobby from "../../assets/Hobby.png"

const Category = () => {
  return (
    <div className="category container">
      <div className="all">
        <div className="hl-img">
          <h1 className="podcast-h1">Best podcast <br /> by category</h1>
          <img className="line" src={line_curve} alt="" />
        </div>
        <div className="all-pp-img">
          <p className="podcast-p">
            Explore and share an extensive collection of high-quality <br />
            audio from artists and creators around the world.
          </p>
          <div className="p-img">
            <p className="podcast-pp">EXPLORE ALL</p>
            <img src={arrowright} alt="" className="arrow-1" />
          </div>
        </div>
      </div>
      <img src={hobby} alt="" className="hobby" />
    </div>
  );
};

export default Category;
