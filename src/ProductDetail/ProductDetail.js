import React, { useState, useEffect } from "react";
import { getProductDetails } from "./../services/service";

const ProductDetail = (props) => {
  const [data, setData] = useState({
    images: [
      "http://localhost:8080/images/detail/m1.webp",
      "http://localhost:8080/images/detail/m2.webp",
      "http://localhost:8080/images/detail/m3.jpg",
      "http://localhost:8080/images/detail/m4.webp",
    ],
    brandName: "BrandName",
    brandDescription: "A little Description about the brand",
    price: 4500,
    mrpPrice: 9000,
    discount: "20%",
    summary: "Maroon solid T-shirt, has a round neck, short sleeves",
    sizeFitDescription: "The model (height 6') is wearing a size M",
    materialandcare: ["Cotton", "Rayon", "Machine wash"],
  });
  const [id] = useState(props.id);

  useEffect(() => {
    let ignore = false;

    async function fetchData() {
      const result = await getProductDetails();
      if (!ignore) {
        if (result.success) {
          setData(result.data.data);
        }
      }
    }

    fetchData();

    return () => {
      console.log("Product detail component unmounted");
    };
  }, [id]);

  return (
    <div className="columns m-0 is-half">
      <div className="column">
        <div className="columns m-0 is-multiline is-1 is-variable">
          {data.images.map((src, index) => {
            return (
              <div className="column is-half" key={index}>
                <figure className="image is-3by4">
                  <img src={src} />
                </figure>
              </div>
            );
          })}
        </div>
      </div>
      <div className="column is-half content">
        <div className="is-size-4 has-text-weight-semibold">
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
            <button className="button is-success p-1 is-fullwidth">
              Add To Bag
            </button>
          </div>
          <div className="column is-half">
            <button className="column button p-1 is-fullwidth">WishList</button>
          </div>
        </div>
        <div>
          <div className="has-text-weight-semibold is-size-4 is-uppercase pt-2 pb-1">
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
