import React, { useState, useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { getFavouriteList } from "./../../services/service";

const WishList = (props) => {
  const userId = props.id;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await getFavouriteList(userId);
      setProducts(result.data.products);
    }
    fetchData();
  }, [userId]);

  return (
    <div className="container">
      <div className="columns is-multiline is-10  m-0 ">
        {products.map((product, index) => {
          return (
            <ProductCard product={product} fromWishList={true} key={index} />
          );
        })}
      </div>
    </div>
  );
};

export default WishList;
