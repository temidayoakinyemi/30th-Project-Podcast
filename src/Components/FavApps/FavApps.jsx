import React from 'react'
import "./FavApps.css"
import logo_podcast from "../../assets/Logo Podcast.png"
import arrow_right_pod from "../../assets/arrow right pod.png"
import apps from "../../assets/Apps.png"

const FavApps = () => {
  return (
    <div className="favapps container">
      <div className="favapps-div">
        <div className="allfavdiv">
          <img src={logo_podcast} alt="" className="logo-pod" />
          <p className="favp">
            Explore and share an extensive collection of high-quality <br />{" "}
            audio from artists and creators around the world.
          </p>
          <img src={arrow_right_pod} alt="" className="arrowpod" />
        </div>
      </div>
      <h1 className='app-h1'>Stream from your favourite apps</h1>
      <img src={apps} alt="" className='app-img' />
    </div>
  );
}

export default FavApps