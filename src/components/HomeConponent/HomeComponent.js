import React from "react";
import BrandCard from "./../BrandCards/BrandCards";
import index1 from "./index1.webp";
import index2 from "./index2.jpg";
import index3 from "./index3.jpg";
import "./home.scss";

const HomeComponent = (props) => {
  const images = [index2, index3, index1];
  const brandCardData = {
    src: "https://bulma.io/images/placeholders/1280x960.png",
    imageAlt: "placeholder Image",
    brandName: "sample brandname",
    helpText: "this is a sample heptext",
  };
  return (
    <div>
      {images.map((value, index) => (
        <section
          className="hero bg-img block is-fullheight-with-navbar"
          style={{ backgroundImage: `url(${value})` }}
          key={index}
        ></section>
      ))}
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

export default HomeComponent;
