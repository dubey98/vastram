import React from "react";
import "./Footer.css";
import google_play from "./google_play.png";
import apple_store from "./apple_store.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="columns has-text-weight-light is-centered is-multiline is-size-7">
      <div className="has-text-left column is-three-fifths  columns is-mobile">
        <div className="column">
          <ul className="list">
            <li>
              <strong>Online Shopping</strong>
            </li>
            <li>
              <Link to="/shop/men">Men</Link>
            </li>
            <li>
              <Link to="/shop/women">Women</Link>
            </li>
            <li>
              <Link to="/shop/kids">Kids</Link>
            </li>
            <li>
              <Link to="/shop/homeandliving">Home & Living</Link>
            </li>
            <li>
              <Link to="/shop/beauty">Beauty</Link>
            </li>
          </ul>
        </div>
        <div className="column">
          <ul className="list">
            <li>
              <strong>Useful links</strong>
            </li>
            <li>
              <Link to="/">vastram home</Link>
            </li>
            <li>
              {" "}
              <Link to="/auth/signup">Signup</Link>{" "}
            </li>
            <li>
              <Link to="/auth/login">Login</Link>
            </li>
            <li>
              <Link to="/shop/products">Try new things</Link>
            </li>
            <li>
              <Link to="/user">your profile</Link>
            </li>
            <li>
              <Link to="/user/orders">Orders</Link>
            </li>
            <li>
              <Link to="/wishlist">Wishlist</Link>
            </li>
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
