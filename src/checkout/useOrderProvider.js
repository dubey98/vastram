import React, { useState, useEffect, createContext } from "react";
import "./checkout.scss";
import {
  addProductTocart,
  getCartData,
  removeProductFromCart,
} from "./../services/service";
import Address from "./Address";
import { useHistory } from "react-router-dom";
import OrderItems from "./OrderItems";
import Payment from "./Payment";
import { getAddressList } from "./../services/service";

const orderContext = createContext(null);

function useOrderProvider() {
  const history = useHistory();
  const [orderItems, setOrderItems] = useState(null);
  const [orderItemsLoading, setOrderItemsLoading] = useState(true);
  const [loadingBar, setLoadingBar] = useState(0);
  const [progress, setProgress] = useState(0);
  const [forwardButtonText, setForwardButtonText] = useState("");
  const [backButtonText, setBackButtonText] = useState("");
  const [layout, setLayout] = useState(null);
  const [chosenAddress, setChosenAddress] = useState(null);
  const [addressList, setAddressList] = useState(null);
  const [addressLoading, setAddressLoading] = useState(true);
  const [addressFormOpen, setAddressFormOpen] = useState(false);
  const [reloadAddress, setReloadAddress] = useState(false);

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
        break;
      default:
        break;
    }
    if (loadingBar < loadingBarLimit) {
      setTimeout(() => setLoadingBar(loadingBar + 1), 10);
    } else if (loadingBar > loadingBarLimit) {
      setTimeout(() => setLoadingBar(loadingBar - 1), 10);
    }
    if (progress === 0) {
      setBackButtonText("Go Back to more shopping");
      setForwardButtonText("Choose addresses");
      setLayout(<OrderItems />);
    } else if (progress === 1) {
      setBackButtonText("Choose Items in yout cart");
      setForwardButtonText("Payment");
      setLayout(<Address />);
    } else if (progress === 2) {
      setBackButtonText("Choose addresses");
      setForwardButtonText("Complete Payment");
      setLayout(<Payment />);
    }
  }, [loadingBar, progress]);

  useEffect(() => {
    async function fetchData() {
      const result = await getCartData();
      setOrderItems(result.data.cart || []);
      setOrderItemsLoading(false);
    }

    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const result = await getAddressList();
      if (result.success) {
        setAddressList(result.addressList);
        setAddressLoading(false);
      }
    }
    fetchData();
  }, [reloadAddress]);

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

  async function handleAddQuantity(id) {
    let tempOrderItems = [...orderItems];
    const index = tempOrderItems.findIndex((val) => val.id === id);
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
      await addProductTocart({
        id: id,
        quantity: tempOrderItems[index].quantity,
      });
    } else {
      let deletedItems = tempOrderItems.splice(index, 1);
      const data = {
        id: deletedItems[0].id,
      };
      await removeProductFromCart(data);
    }
    setOrderItems(tempOrderItems);
  }

  function handleChooseAddressClick(e, id) {
    const tempChosenAddress = addressList.find((address) => {
      return address.id === id;
    });

    setChosenAddress(tempChosenAddress);
  }

  function openAddressForm() {
    setAddressFormOpen(true);
  }

  function closeAddressForm() {
    setAddressFormOpen(false);
  }

  function handleReloadAddress() {
    setReloadAddress(!reloadAddress);
  }

  return {
    forwardButtonText,
    backButtonText,
    layout,
    orderItems,
    orderItemsLoading,
    loadingBar,
    chosenAddress,
    addressList,
    addressLoading,
    addressFormOpen,
    handleBackButtonClick,
    handleForwardButtonClick,
    handleAddQuantity,
    handleRemoveQuantity,
    handleChooseAddressClick,
    openAddressForm,
    closeAddressForm,
    handleReloadAddress,
  };
}

export { useOrderProvider, orderContext };
