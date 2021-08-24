import React, { useState, useEffect } from "react";
import { getHomePageData } from "./../services/service";
import { Link } from "react-router-dom";
import Loading from "../components/Loading/Loading";

const HomePage = ({ category }) => {
  const [loading, setLoading] = useState(true);
  const [brandCardData, setBrandCardData] = useState([]);
  const [imagesData, setImagesData] = useState([]);

  useEffect(() => {
    let ignore = false;

    async function fetchData() {
      if (!ignore) {
        const result = await getHomePageData();
        if (result.success) {
          setBrandCardData(result.brandCardData);
          setImagesData(result.imageData);
          setLoading(false);
        }
      }
    }

    fetchData();
  }, [category]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <Link to={imagesData[0].linksTo}>
        <section
          className="hero bg-img block is-fullheight-with-navbar"
          style={{ backgroundImage: `url(${imagesData[0].src})` }}
        ></section>
      </Link>
      <section className="container hero is-halfheight block pt-6 pb-6">
        <p className="is-uppercase p-2 has-text-weight-semibold is-size-3">
          have a look!
        </p>
        <div className="columns p-2 is-multiline is-centered">
          {mapBrandCardData(brandCardData)}
        </div>
      </section>
      <Link to={imagesData[1].linksTo}>
        <section
          className="hero bg-img block is-fullheight-with-navbar"
          style={{ backgroundImage: `url(${imagesData[1].src})` }}
        ></section>
      </Link>
    </div>
  );
};

function mapBrandCardData(brandCardData) {
  let brandCards = [];
  let index = 0;
  for (let data of brandCardData) {
    let newBrandCardData = <BrandCard {...data} key={index} />;
    brandCards.push(newBrandCardData);
    index++;
  }
  return brandCards;
}

function BrandCard(props) {
  const { src, imageAlt, brandName, helpText } = props;
  return (
    <div className="column is-one-quarter-tablet is-one-fifth-desktop is-2-widescreen">
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
}

export default HomePage;
