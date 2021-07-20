import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.scss";

const ProductCard = (props) => {
  const { id, src, imageAlt, name, description, offerPrice, mrp } =
    props.product;

  return (
    <div className="column is-one-fifth">
      <Link to={`/shop/${id}`}>
        <div className="card">
          <div className="card-image">
            <figure className="image is-4by5">
              <img src={src} alt={imageAlt} />
            </figure>
          </div>
          <div className="card-content content">
            <div>
              <div className="has-text-weight-semibold">{name}</div>
              <div className="has-text-weight-light">{description}</div>
              <div className="has-text-weight-semibold">
                Rs.{offerPrice}/-{" "}
                <span className="has-text-weight-light has-text-crossed is-italic">
                  Rs. {mrp}/-
                </span>{" "}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
