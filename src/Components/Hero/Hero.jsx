import React from "react";
import "./Hero.css";
import woman_dancing from "../../assets/Woman Dancing.png";
import app_store from "../../assets/App Store.png"
import googleplay from "../../assets/Googleplay.png"

const Hero = () => {
  return (
    <div className="hero container">
      <img src={woman_dancing} alt="" className="woman" />
      <div className="hero-all">
        <h1 className="hero-h1">
          Where Music is <br /> for Everyone
        </h1>
        <p className="hero-p">
          Explore and share an extensive collection of high-quality  audio
          from artists and creators around the world.
        </p>
        <div className="image-all">
            <img className="appstore" src={app_store} alt="" />
            <img className="google" src={googleplay} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
