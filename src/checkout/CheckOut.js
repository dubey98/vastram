import React, { useState, useEffect } from "react";
import "./checkout.scss";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import {
  addProductTocart,
  getCartData,
  removeProductFromCart,
} from "./../services/service";
import Loading from "../components/Loading/Loading";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const CheckOut = ({ id }) => {
  const [progress, setProgress] = useState(0);
  const [orderItems, setOrderItems] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;

    async function fetchData() {
      if (!ignore) {
        const result = await getCartData(id);
        setOrderItems(result.data.cart || []);
        console.log(result.data.cart);
        setLoading(false);
      }
    }

    fetchData();
  }, [id]);

  useEffect(() => {
    if (progress < 33) {
      setTimeout(() => setProgress(progress + 1), 10);
    }
  }, [progress]);

  async function handleAddQuantity(id) {
    let tempOrderItems = [...orderItems];
    const index = tempOrderItems.findIndex((val) => val.id == id);
    tempOrderItems[index].quantity += 1;
    await addProductTocart({
      id: id,
      quantity: tempOrderItems[index].quantity,
    });
    setOrderItems(tempOrderItems);
  }

  async function handleRemoveQuantity(id) {
    let tempOrderItems = [...orderItems];
    const index = tempOrderItems.findIndex(
      (val) => val.id.toString() === id.toString()
    );
    if (tempOrderItems[index].quantity > 1) {
      tempOrderItems[index].quantity -= 1;
    } else {
      let deletedItems = tempOrderItems.splice(index, 1);
      const data = {
        id: deletedItems[0].id,
      };
      await removeProductFromCart(data);
    }
    setOrderItems(tempOrderItems);
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="block">
        <div className="columns has-text-centered">
          <div className="column">Order</div>
          <div className="column">Address</div>
          <div className="column">Payment</div>
        </div>
        <progress
          className="progress is-small is-success"
          value={progress.toString()}
          max="100"
        ></progress>
      </div>
      <div className="columns is-centered">
        <div className="column is-half">
          {orderItems.map((val, index) => {
            return (
              <div className="box" key={index}>
                <article className="media">
                  <div className="media-left">
                    <figure
                      className="image is-128x128"
                      style={{ height: "100%" }}
                    >
                      <img src={val.src} alt="image" />
                    </figure>
                  </div>
                  <div className="media-content">
                    <div className="content">
                      <p>
                        <strong>{val.title}</strong>
                        <br />
                        <small>{val.description}</small>
                        <br />
                        {val.description.length > 100
                          ? val.description.slice(0, 100) + "..."
                          : val.description}
                        <br />
                        <span className="has-text-success is-size-4 pr-3">
                          {val.offerPrice}/-
                        </span>
                        <span className="has-text-danger has-text-crossed is-italic is-size-5 pr-2">
                          {val.mrp}/-
                        </span>
                        <span className="has-text-success  is-size-5">
                          {val.discount}%
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="media-right level">
                    <button
                      className="button"
                      onClick={async () => await handleRemoveQuantity(val.id)}
                    >
                      <RemoveIcon style={{ fontSize: "small" }} />
                    </button>
                    <div className="p-4">{val.quantity}</div>
                    <button
                      className="button"
                      onClick={async () => await handleAddQuantity(val.id)}
                    >
                      <AddIcon style={{ fontSize: "small" }} />
                    </button>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
        <div className="column is-one-quarter box mb-3 mt-3">
          Order summary and other details will be displayed here
        </div>
      </div>
      <div className="columns is-centered content">
        <button className="button is-fullwidth column is-success is-half has-text-left">
          <span className="mt-2">
            <ArrowBackIcon />
          </span>
          Go Back to more shopping
        </button>
        <button className="button is-fullwidth column is-one-quarter has-text-right">
          Choose addresses
          <span className="mt-2">
            <ArrowForwardIcon />
          </span>
        </button>
      </div>
    </div>
  );
};

export default CheckOut;
