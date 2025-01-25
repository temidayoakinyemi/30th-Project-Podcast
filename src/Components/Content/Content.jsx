import React from "react";
import "./Content.css";
import content from "../../assets/Content.png";
import arrowright from "../../assets/arrow-right.png";

const Content = () => {
  return (
    <div className="content container">
      <div className="all">
          <img src={content} alt="" className="content-img" />
          <div className="all-block">
              <h1 className="content-h1">More than thousands of content for you</h1>
              <p className="content-p">
                Discover the limitless podcast category options from various content
                creator around the world lorem ipsum sir dolor amet.
              </p>
              <div className="allcontent-div">
                <div className="content-div">
                  <p className="content-div-p">28</p>
                  <p className="content-div-p2">Platform</p>
                </div>
                <div className="content-div2">
                  <p className="content-div-p">16 M</p>
                  <p className="content-div-p2">Streamer</p>
                </div>
                <div className="content-div3">
                  <p className="content-div-p">5 M</p>
                  <p className="content-div-p2">Listener</p>
                </div>
              </div>
              <div className="content-all-div">
                  <p className="content-exp">EXPLORE ALL</p>
                  <img src={arrowright} alt="" className="content-arrow-1" />
              </div>
          </div>
      </div>
     
    </div>
  );
};

export default Content;
