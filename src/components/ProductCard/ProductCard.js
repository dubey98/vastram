import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ProductCard.scss";
import {
  addProductToFavourites,
  checkIfWishlisted,
} from "./../../services/service";
import { FavoriteBorderOutlined, FavoriteOutlined } from "@material-ui/icons";

const ProductCard = ({ product, fromWishList }) => {
  const { id, src, imageAlt, name, description, offerPrice, mrp } = product;
  const [infocus, setInfocus] = useState(false);
  const [favclicked, setFavclicked] = useState(false);

  async function handleFavoriteClick() {
    setFavclicked(true);
    await addProductToFavourites(id);
  }

  useEffect(() => {
    async function fetchData() {
      const result = await checkIfWishlisted(id);
      if (result.success) {
        if (result.wishlisted) {
          setFavclicked(true);
        } else {
          setFavclicked(false);
        }
      }
    }
    fetchData();
  }, [id]);

  function showWishListButton() {
    if (infocus && !fromWishList) {
      return (
        <div
          className="p-2 has-text-centered is-clickable box is-shadowless"
          style={{
            zIndex: 1,
            position: "absolute",
            bottom: "0rem",
            width: "100%",
          }}
          onClick={() => handleFavoriteClick()}
        >
          <div className="icon is-small is-right">
            {favclicked ? <FavoriteOutlined /> : <FavoriteBorderOutlined />}
            wishlist
          </div>
        </div>
      );
    }
  }

  return (
    <div className="column is-2-fullhd is-one-fifth-widescreen is-one-quarter-desktop is-one-third-tablet">
      <div
        className="card"
        onMouseEnter={() => setInfocus(true)}
        onMouseLeave={() => setInfocus(false)}
      >
        <div className="card-image is-relative">
          <figure className="image is-4by5">
            <img src={src} alt={imageAlt} />
          </figure>
          {showWishListButton()}
        </div>
        <Link to={`/shop/${id}`}>
          <div className="card-content">
            <p className="">
              <strong className="">{name}</strong>
              <br />
              <span className="has-text-weight-light is-clipped">
                {description.length > 20
                  ? description.slice(0, 20) + "..."
                  : description}
              </span>
              <br />
              <span className="has-text-weight-semibold">
                Rs.{offerPrice}/-
                <span className="has-text-weight-light has-text-crossed is-italic">
                  Rs. {mrp}/-
                </span>
              </span>
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
