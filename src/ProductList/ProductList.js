import React from "react";
import { useRouteMatch } from "react-router-dom";
import ProductCard from "../components/ProductCard/ProductCard";
import Filter from "./../components/Filter/Filter";
import img1 from "./women-kurta.webp";

const ProductList = () => {
  // const match = useRouteMatch();
  const style = {
    height: "500px",
  };

  const products = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  const brandCardData = {
    src: `/women-kurta.webp`,
    imageAlt: "placeholder Image",
    name: "Libas",
    description: "Women Piches A line kurti",
    offerPrice: 4500,
    mrp: 7000,
  };
  return (
    <div>
      <div className="columns mr-2 ml-2 ">
        <div className="column is-2">
          <Filter />
        </div>
        <div className="column columns is-multiline is-centered is-10  m-0">
          {products.map((product, index) => {
            return <ProductCard {...brandCardData} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
