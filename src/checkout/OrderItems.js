import React from "react";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

import Loading from "../components/Loading/Loading";
import { Link } from "react-router-dom";
import { orderContext } from "./useOrderProvider";

function OrderItems({ id }) {
  return (
    <orderContext.Consumer>
      {(value) => {
        return value.orderItemsLoading ? (
          <Loading />
        ) : value.orderItems.length === 0 ? (
          <div className="column is-half">
            <div className="box">
              <article className="media">
                <div className="media-content content has-text-centered">
                  Hi! Your cart feels so empty... <br />
                  can we help you with <Link to="/">Something</Link>?
                </div>
              </article>
            </div>
          </div>
        ) : (
          createOrderItemsComponent(value)
        );
      }}
    </orderContext.Consumer>
  );
}

function createOrderItemsComponent(value) {
  return (
    <div className="column is-half">
      {value.orderItems.map((val, index) => {
        return (
          <div className="box" key={index}>
            <article className="media">
              <div className="media-left">
                <figure className="image is-128x128" style={{ height: "100%" }}>
                  <img src={val.src} alt="product model" />
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
                  onClick={async () => await value.handleRemoveQuantity(val.id)}
                >
                  <RemoveIcon style={{ fontSize: "small" }} />
                </button>
                <div className="p-4">{val.quantity}</div>
                <button
                  className="button"
                  onClick={async () => await value.handleAddQuantity(val.id)}
                >
                  <AddIcon style={{ fontSize: "small" }} />
                </button>
              </div>
            </article>
          </div>
        );
      })}
    </div>
  );
}

export default OrderItems;
