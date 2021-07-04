import React from "react";
import "./Footer.css";
import google_play from "./google_play.png";
import apple_store from "./apple_store.png";

const Footer = () => {
  return (
    <div className="columns has-text-weight-light is-centered is-multiline is-size-7">
      <div className="has-text-left column is-three-fifths  columns is-mobile">
        <div className="column">
          <ul className="list">
            <li>
              <strong>Online Shopping</strong>
            </li>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>Home & Living</li>
            <li>Beauty</li>
          </ul>
        </div>
        <div className="column">
          <ul className="list">
            <li>
              <strong>Useful links</strong>
            </li>
            <li>vastram home</li>
            <li>Signup</li>
            <li>Login</li>
            <li>Try new things</li>
            <li>your profile</li>
            <li>Orders</li>
            <li>Wishlist</li>
          </ul>
        </div>
        <div className="column">
          <div>
            on Mobiles :
            <br />
            <div className="columns is-mobile">
              <a className="column" href="/">
                <img src={google_play} alt="Play Store" />
              </a>
              <a className="column" href="/">
                <img src={apple_store} alt="Apple Store" />
              </a>
            </div>
          </div>
        </div>
        <div className="column">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
            soluta amet provident! Aspernatur quod accusantium vero excepturi
            fuga porro ab explicabo possimus exercitationem earum at magnam
            nesciunt voluptates, quis quisquam.
          </p>
        </div>
      </div>
      <div className="column is-three-fifths">Copyright &copy; 2021</div>
    </div>
  );
};

export default Footer;
