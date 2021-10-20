import React, { useState, useEffect } from "react";
import { getFrontPageData } from "./../services/service";
import { Link } from "react-router-dom";
import Loading from "../components/Loading/Loading";
import ImageTile from "../components/ImageTile";
import FrontPageBrandCards from "../components/FrontPageBrandCards";
import { useMediaQuery } from "react-responsive";

const ShopFront = ({ category }) => {
  const isMobile = useMediaQuery({ query: "(max-width : 768px)" });
  const [loading, setLoading] = useState(true);
  const [tileOneImages, setTileOneImages] = useState([]);
  const [categories, setCategories] = useState([]);
  const [brandCardsData, setBrandCardsData] = useState([]);
  const [heroData, setHeroData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const result = await getFrontPageData(category || "men");
      if (result.success) {
        setTileOneImages(result.tileOneImages);
        setCategories(result.categories);
        setBrandCardsData(result.brandCardsData);
        setHeroData(result.herodata);
        setLoading(false);
      }
    }
    fetchData();
  }, [category]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="container block">
        {isMobile ? (
          <section
            className="block hero is-fullheight-with-navbar bg-img"
            style={{ backgroundImage: `url(${tileOneImages[0].src})` }}
          ></section>
        ) : (
          <section className="block hero is-halfheight">
            <div className="tile is-ancestor">
              <div className="tile is-parent is-4">
                <ImageTile data={tileOneImages[0]} />
              </div>
              <div className="tile is-vertical">
                <div className="tile is-parent">
                  <ImageTile data={tileOneImages[1]} />
                </div>
                <div className="tile">
                  <div className="tile is-parent">
                    <ImageTile data={tileOneImages[2]} />
                  </div>
                  <div className="tile is-parent">
                    <ImageTile data={tileOneImages[3]} />
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
        <section className="block hero is-large">
          <div className="content has-text-left is-size-3 has-text-weight-semibold is-uppercase">
            Explore Categories
          </div>
          <div className="columns is-multiline">
            {mapCategories(categories, category)}
          </div>
        </section>
        <section className="block hero is-large">
          <div className="content has-text-left is-size-3 has-text-weight-semibold is-uppercase">
            Explore your favourite brands
          </div>
          <div className="columns is-multiline is-centered">
            {brandCardsData.map((data, index) => (
              <FrontPageBrandCards data={data} key={index} />
            ))}
          </div>
        </section>
      </div>
      <section
        className="block hero is-fullheight-with-navbar bg-img"
        style={{ backgroundImage: `url(${heroData.src})` }}
      ></section>
    </div>
  );
};

function mapCategories(categories, category) {
  let categoryComponents = [];
  let index = 0;
  for (let [link, linkName] of Object.entries(categories)) {
    let tempComponent = (
      <div
        className="column is-2-widescreen is-3-desktop is-one-quarter-tablet"
        key={index}
      >
        <Link to={"/shop/search?category=" + category + "&subcategory=" + link}>
          <div
            className="box content is-uppercase has-text-centered has-fullheight-content is-shadowless"
            onMouseEnter={(e) =>
              (e.target.className =
                "box is-uppercase has-text-centered has-fullheight-content")
            }
            onMouseLeave={(e) => {
              e.target.className =
                "box is-uppercase has-text-centered has-fullheight-content is-shadowless";
            }}
          >
            {linkName}
          </div>
        </Link>
      </div>
    );
    index++;
    categoryComponents.push(tempComponent);
  }
  return categoryComponents;
}

export default ShopFront;
