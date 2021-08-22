//import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import NavbarDropDown from "./NavbarDropDown/NavbarDropDown";
import FavoriteBorderSharpIcon from "@material-ui/icons/FavoriteBorderSharp";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import { useEffect } from "react";

function Navbar() {
  const isBurgerActive = useMediaQuery({ query: "(max-width : 1024px)" });

  const [burgerVisible, setBurgerVisible] = useState(false);

  const categories = {
    MEN: "men",
    WOMEN: "women",
    KIDS: "kids",
    "HOME & LIVING": "homeandliving",
    BEAUTY: "beauty",
  };

  useEffect(() => {
    if (!isBurgerActive) {
      setBurgerVisible(false);
    }
  }, [isBurgerActive]);

  function mapCategories() {
    let categoryList = [];
    for (let [key, value] of Object.entries(categories)) {
      let category = (
        <Link className="navbar-item is-tab" to={"/shop/" + value} key={value}>
          {key}
        </Link>
      );
      categoryList.push(category);
    }
    return categoryList;
  }

  function handleBurgerClick() {
    burgerVisible ? setBurgerVisible(false) : setBurgerVisible(true);
  }

  return (
    <nav
      className="navbar is-transparent is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand mr-6 ml-6">
          <Link className="navbar-item" to="/">
            <img src="\logo2.png" width="80" height="50" alt="Brand" />
          </Link>

          <div
            to="/"
            role="button"
            className={
              burgerVisible ? "navbar-burger is-active" : "navbar-burger"
            }
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            onClick={() => handleBurgerClick()}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </div>
        </div>

        <div
          className={
            burgerVisible
              ? "navbar-menu is-active is-spaced has-text-weight-semibold"
              : "navbar-menu is-spaced has-text-weight-semibold"
          }
          onClick={() => {
            if (burgerVisible) setBurgerVisible(false);
          }}
        >
          <div className="navbar-start mr-4 ml-4">{mapCategories()}</div>

          <div className="navbar-end">
            <div className="control navbar-item is-expanded">
              <input className="input" type="text" placeholder="Search" />
            </div>

            <NavbarDropDown burgerVisible={burgerVisible} />

            {burgerVisible ? (
              <div className="navbar-item">
                <div className="navbar-item">
                  <Link to="/wishlist">Your Wishlist</Link>
                </div>
                <div className="navbar-item">
                  <Link to="/checkout">Your Orders</Link>
                </div>
              </div>
            ) : (
              <div className="navbar-item">
                <Link className="navbar-item" to="/wishlist">
                  <FavoriteBorderSharpIcon />
                </Link>

                <Link className="navbar-item" to="/checkout">
                  <LocalMallOutlinedIcon />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
