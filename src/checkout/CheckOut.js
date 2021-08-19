import React, { useState, useEffect, createContext } from "react";
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
import Address from "./Address";
import { Link, useHistory } from "react-router-dom";

const orderContext = createContext(null);

const CheckOut = ({ id }) => {
  const history = useHistory();

  const [loadingBar, setLoadingBar] = useState(0);
  const [progress, setProgress] = useState(0);
  const [forwardButtonText, setForwardButtonText] = useState("");
  const [backButtonText, setBackButtonText] = useState("");
  const [layout, setLayout] = useState(null);

  useEffect(() => {
    let loadingBarLimit = 0;
    switch (progress) {
      case 0:
        loadingBarLimit = 33;
        break;
      case 1:
        loadingBarLimit = 66;
        break;
      case 2:
        loadingBarLimit = 100;
      default:
        break;
    }
    if (loadingBar < loadingBarLimit) {
      setTimeout(() => setLoadingBar(loadingBar + 1), 10);
    } else if (loadingBar > loadingBarLimit) {
      setTimeout(() => setLoadingBar(loadingBar - 1), 10);
    }
  }, [loadingBar, progress]);

  useEffect(() => {
    if (progress === 0) {
      setBackButtonText("Go Back to more shopping");
      setForwardButtonText("Choose addresses");
      setLayout(<OrderItems id={id} />);
    } else if (progress === 1) {
      setBackButtonText("Choose Items in yout cart");
      setForwardButtonText("Payment");
      setLayout(<Address />);
    } else if (progress === 2) {
      setBackButtonText("Choose addresses");
      setForwardButtonText("Complete Payment");
      setLayout(<Payment />);
    }
  }, [progress]);

  function handleBackButtonClick() {
    if (progress === 0) {
      history.push("/");
    } else {
      setProgress(progress - 1);
    }
  }

  function handleForwardButtonClick() {
    if (progress === 2) {
      history.push("/");
    } else {
      setProgress(progress + 1);
    }
  }

  return (
    <orderContext.Provider>
      <div className="block">
        <div className="columns has-text-centered">
          <div className="column">Order</div>
          <div className="column">Address</div>
          <div className="column">Payment</div>
        </div>
        <progress
          className="progress is-small is-success"
          value={loadingBar.toString()}
          max="100"
        ></progress>
      </div>
      <div className="columns is-centered">
        {layout}
        <div className="column is-one-quarter box mb-3 mt-3">
          <OrderSummary />
        </div>
      </div>
      <div className="columns is-centered content">
        <button
          className="button is-fullwidth column is-success is-half has-text-left"
          onClick={() => handleBackButtonClick()}
        >
          <span className="mt-2">
            <ArrowBackIcon />
          </span>
          {backButtonText}
        </button>
        <button
          className="button is-fullwidth column is-one-quarter has-text-right"
          onClick={() => handleForwardButtonClick()}
        >
          {forwardButtonText}
          <span className="mt-2">
            <ArrowForwardIcon />
          </span>
        </button>
      </div>
    </orderContext.Provider>
  );
};

// function useOrderProvider() {
//   const [id, setId] = useState(null);
//   const [orderItems, setOrderItems] = useState(null);
//   const [loadingBar, setLoadingBar] = useState(0);
//   const [progress, setProgress] = useState(0);
//   const [forwardButtonText, setForwardButtonText] = useState("");
//   const [backButtonText, setBackButtonText] = useState("");
// }

function OrderItems({ id }) {
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

  if (!loading) {
    if (orderItems.length === 0) {
      return (
        <div className="column is-half content">
          <div className="box has-text-centered">
            OHO! Such Empty..
            <br />
            can we help you with <Link to="/">Something</Link>?
          </div>
        </div>
      );
    }
  }

  return (
    <div className="column is-half">
      {orderItems.map((val, index) => {
        return (
          <div className="box" key={index}>
            <article className="media">
              <div className="media-left">
                <figure className="image is-128x128" style={{ height: "100%" }}>
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
  );
}

function OrderSummary() {
  return (
    <div className="content">
      <strong>Order Summary : </strong>
      <br />
    </div>
  );
}

function Payment() {
  return (
    <div className="column is-half">
      <div className="box">This is the payment box</div>
    </div>
  );
}

export default CheckOut;
