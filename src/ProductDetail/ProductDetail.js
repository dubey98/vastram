import React, { useState, useEffect } from "react";
import { getProductDetails } from "./../services/service";
import { useParams } from "react-router-dom";
import Loading from "./../components/Loading/Loading";
import {
  addProductToFavourites,
  addProductTocart,
} from "./../services/service";

const ProductDetail = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const { productId } = useParams();

  useEffect(() => {
    async function fetchData() {
      const result = await getProductDetails(productId);
      setData(result.product);
      setLoading(false);
    }

    fetchData();
  }, [productId]);

  async function handleAddToCartClick() {
    const data = {
      id: productId,
    };
    const result = await addProductTocart(data);
    if (!result.data.success) {
      console.log("An Error Happened", result.data);
    }
  }

  async function handleAddToFavClick() {
    const result = await addProductToFavourites(productId);
    if (!result.data.success) {
      console.log("An Error Happened", result.data);
    }
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="columns m-0 is-half">
      <div className="column">
        <div className="columns m-0 is-multiline is-1 is-variable">
          {data.images.map((src, index) => {
            return (
              <div className="column is-half" key={index}>
                <figure className="image is-3by4">
                  <img src={src} alt="description text" />
                </figure>
              </div>
            );
          })}
        </div>
      </div>
      <div className="column is-half content">
        <div className="is-size-3 has-text-weight-semibold">
          {data.brandName}
        </div>
        <div className="is-size-5 has-text-weight-light">
          {data.brandDescription}
        </div>
        <hr />
        <div>
          <div className="has-text-weight-semibold is-inline is-size-4 ">
            Rs.{data.price}/-{" "}
          </div>
          <div className="is-inline p-2 has-text-crossed">
            Rs.{data.mrpPrice}/-
          </div>
          <div className="is-inline p-2 is-size-5 has-text-success">
            ({(data.price / data.mrpPrice) * 100}%)
          </div>
        </div>
        <div className="is-size-6 has-text-weight-semibold has-text-grey-light">
          inclusive of all taxes
        </div>
        <br />
        <div className="columns is-variable is-1 m-0">
          <div className="column is-half">
            <button
              className="button is-success p-1 is-fullwidth"
              onClick={async () => await handleAddToCartClick()}
            >
              Add To Bag
            </button>
          </div>
          <div className="column is-half">
            <button
              className="column button p-1 is-fullwidth"
              onClick={async () => await handleAddToFavClick()}
            >
              WishList
            </button>
          </div>
        </div>
        <div>
          <div className="has-text-weight-semibold is-size-5 is-uppercase pt-2 pb-1">
            Product details
          </div>
          <div>{data.summary}</div>
          <div className="pt-2">
            <div className="has-text-weight-semibold">Size& Fit</div>
            <div>{data.sizeFitDescription}</div>
          </div>
          <div className="pt-2">
            <div className="has-text-weight-semibold">Material & Care</div>
            <dl>
              {data.materialandcare.map((val, index) => {
                return <dt key={index}>{val}</dt>;
              })}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
