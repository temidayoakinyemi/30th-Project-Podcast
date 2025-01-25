import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import app_store from "../../assets/App Store.png";
import googleplay from "../../assets/Googleplay.png";
import fb_ig_x from "../../assets/FB IG X.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-div">
        <h1 className="footer-h1">
          Join our member and get <br /> all access in your hands
        </h1>
        <p className="footer-p">
          Discover the limitless podcast category options from various content{" "}
          <br />
          creator around the world lorem ipsum sir dolor amet.
        </p>
        <div className="input-btn">
          <input
            type="emial"
            placeholder="yourname@mail.com"
            className="input"
          />
          <button className="footer-btn">Get Started</button>
        </div>
      </div>

      <div className="all-logo-p-all-ul">
        <div className="all-logo-p-2">
          <img src={logo} alt="" className="logo-footer" />
          <p className="footer-p-2">The best sound library for you</p>
        </div>
        <div className="all-ul">
          <ul>
            <p className="ul-p">SERVICES</p>
            <li>About</li>
            <li>Contact Us</li>
            <li>Features</li>
            <li>Blog</li>
          </ul>
          <ul>
            <p className="ul-p">RESOURCES</p>
            <li>Apps</li>
            <li>Developer</li>
            <li>Integration</li>
            <li>Pricing</li>
          </ul>
          <ul>
            <p className="ul-p">SUPPORT</p>
            <li>License</li>
            <li>Get Started</li>
            <li>Affiliate</li>
            <li>FAQs</li>
          </ul>
        </div>
        <img src={fb_ig_x} alt="" className="fb-ig-x-img" />
      </div>
      <p className="footer-p-3">© 2025 Company Inc.</p>
      <div className="all-p-app-google">
        <div className="all-p">
          <p className="footer-p-4">Privacy Policy</p>
          <p className="footer-p-5">Terms of Use</p>
          <p className="footer-p-6">Cookies</p>
        </div>
        <div className="app-google-2">
          <img src={app_store} alt="" className="app-footer" />
          <img src={googleplay} alt="" className="google-footer" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
