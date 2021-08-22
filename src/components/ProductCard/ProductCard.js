import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ProductCard.scss";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { addProductToFavourites } from "./../../services/service";

const ProductCard = (props) => {
  const { id, src, imageAlt, name, description, offerPrice, mrp } =
    props.product;
  const [favoriteIconSize, setFavoriteIconSize] = useState("24px");

  function handleFavoriteHover(event = true) {
    event ? setFavoriteIconSize("28px") : setFavoriteIconSize("24px");
  }

  async function handleFavoriteClick() {
    const result = await addProductToFavourites(id);
    console.log(result);
  }

  return (
    <div className="column is-2-widescreen is-one-quarter-desktop is-one-third-tablet">
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by5">
            <span
              onMouseEnter={(e) => handleFavoriteHover(true)}
              onMouseLeave={() => handleFavoriteHover(false)}
              onClick={async () => await handleFavoriteClick()}
            >
              <FavoriteIcon
                className="is-overlay m-2 is-clickable"
                style={{
                  zIndex: "1",
                  fill: "red",
                  fontSize: favoriteIconSize,
                }}
              />
            </span>
            <img src={src} alt={imageAlt} />
          </figure>
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
                Rs.{offerPrice}/-{" "}
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
