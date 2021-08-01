import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard/ProductCard";
import Filter from "./../components/Filter/Filter";
import { getProductList } from "./../services/service";

const ProductList = ({ category, filters }) => {
  const products = [
    {
      id: 34,
      src: `/women-kurta.webp`,
      imageAlt: "placeholder Image",
      name: "Libas",
      description: "Women Piches A line kurti",
      offerPrice: 4500,
      mrp: 7000,
    },
  ];

  useEffect(() => {
    const ignore = false;

    async function fetchData() {
      const data = {
        category: "Men",
        filters: { Brand: "Adidas" },
      };
      const result = await getProductList(data);
      console.log(result);
    }
    fetchData();
    return () => {};
  }, [category, filters]);

  return (
    <div>
      <div className="columns mr-2 ml-2 ">
        <div className="column is-2">
          <Filter />
        </div>
        <div className="column columns is-multiline is-centered is-10  m-0">
          {products.map((product, index) => {
            return <ProductCard product={product} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
