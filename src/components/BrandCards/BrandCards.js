import React from "react";

const BrandCards = (props) => {
  const { src, imageAlt, brandName, helpText } = props;
  return (
    <div className="column">
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by5">
            <img src={src} alt={imageAlt} />
          </figure>
        </div>
        <div className="card-content content">
          <div>
            <div className="has-text-weight-semibold">{brandName}</div>
            <div className="">{helpText}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandCards;
