import React from "react";
import "./checkout.scss";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { useOrderProvider, orderContext } from "./useOrderProvider";
import OrderSummary from "./OrderSummary";

const CheckOut = () => {
  const order = useOrderProvider();

  return (
    <orderContext.Provider value={order}>
      <div className="block">
        <div className="columns has-text-centered">
          <div className="column">Order</div>
          <div className="column">Address</div>
          <div className="column">Payment</div>
        </div>
        <progress
          className="progress is-small is-success"
          value={order.loadingBar.toString()}
          max="100"
        ></progress>
      </div>
      <div className="columns is-centered">
        {order.layout}
        <div className="column is-one-quarter box mb-3 mt-3">
          <OrderSummary />
        </div>
      </div>
      <div className="columns is-centered content">
        <button
          className="button is-fullwidth column is-success is-half has-text-left"
          onClick={() => order.handleBackButtonClick()}
        >
          <span className="mt-2">
            <ArrowBackIcon />
          </span>
          {order.backButtonText}
        </button>
        <button
          className="button is-fullwidth column is-one-quarter has-text-right"
          onClick={() => order.handleForwardButtonClick()}
        >
          {order.forwardButtonText}
          <span className="mt-2">
            <ArrowForwardIcon />
          </span>
        </button>
      </div>
    </orderContext.Provider>
  );
};

export default CheckOut;
