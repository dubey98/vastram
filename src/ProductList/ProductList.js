import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard/ProductCard";
import Filter from "./../components/Filter/Filter";
import { getProductList } from "./../services/service";

const ProductList = ({ category, filters }) => {
  const [products, setProducts] = useState([]);
  const [activeFilters, setActiveFilters] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = {
        category: "Men",
        filters: { Brand: "Adidas" },
      };
      const result = await getProductList(data);
      setProducts(result.data.products);
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
        <div className="column is-10  m-0">
          <div className="tags are-medium ">
            <span className="tag is-rounded is-info is-light">
              ADIDAS
              <button className="delete"></button>
            </span>
          </div>
          <div className="columns is-multiline is-centered">
            {products.map((product, index) => {
              return <ProductCard product={product} key={index} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
