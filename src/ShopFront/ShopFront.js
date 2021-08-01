import React, { useState, useEffect } from "react";
import { getFrontPageData } from "./../services/service";
import BrandCard from "./../components/BrandCards/BrandCards";
import index1 from "./index1.webp";
import index2 from "./index2.jpg";
import index3 from "./index3.jpg";
import { Link } from "react-router-dom";

const ShopFront = (props) => {
  const [data, setData] = useState({ hits: [] });
  const images = [index2, index3, index1];
  const brandCardData = {
    src: "https://bulma.io/images/placeholders/1280x960.png",
    imageAlt: "placeholder Image",
    brandName: "sample brandname",
    helpText: "this is a sample heptext",
  };

  useEffect(() => {
    let ignore = false;

    async function fetchData() {
      if (!ignore) {
        console.log("making a request");
        const result = await getFrontPageData(props.category);
        console.log(result.data, "Shopfront.js line 15");
        setData(result.data);
      }
    }

    fetchData();

    return () => {
      ignore = true;
    };
  }, [props.category]);

  return (
    <div>
      {images.map((value, index) => {
        return (
          <Link to={"/shop/search"} key={index}>
            <section
              className="hero bg-img block is-fullheight-with-navbar"
              style={{ backgroundImage: `url(${value})` }}
              key={index}
            ></section>
          </Link>
        );
      })}
      <div className="container">
        <section className="columns">
          <BrandCard {...brandCardData} />
          <BrandCard {...brandCardData} />
          <BrandCard {...brandCardData} />
          <BrandCard {...brandCardData} />
          <BrandCard {...brandCardData} />
        </section>
      </div>
    </div>
  );
};

export default ShopFront;
