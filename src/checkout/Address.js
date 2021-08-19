import React from "react";
import { useState, useEffect } from "react";
import Loading from "../components/Loading/Loading";
import { getAddressList } from "./../services/service";
import AddIcon from "@material-ui/icons/Add";
import { createNewAddress } from "./../services/service";

const Address = () => {
  const [addressList, setAddressList] = useState(null);
  const [loading, setLoading] = useState(true);
  const [addressFormOpen, setAddressFormOpen] = useState(false);
  const [chosenAddress, setChosenAddress] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const result = await getAddressList();
      if (result.success) {
        setAddressList(result.addressList);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  function openAddressForm() {
    setAddressFormOpen(true);
  }

  function closeAddressForm() {
    setAddressFormOpen(false);
  }

  function handleChooseAddressClick(e, id) {
    setChosenAddress(id);
  }

  if (loading) {
    return (
      <div className="column is-half">
        <Loading />
      </div>
    );
  }

  return (
    <div className="column is-half">
      <div className="box">
        {addressList.map((val, index) => {
          return (
            <article className="media" key={val.id}>
              <div className="media-content">
                <p className="content">
                  <strong>{val.name}</strong>
                  <br />
                  {val.addressLine},{val.locality}
                  <br />
                  {val.city},{val.state} <br />
                  PinCode : {val.pincode} <br />
                  <strong>Contact</strong> : {val.mobile}
                </p>
              </div>
              <div className="media-right">
                <button
                  className={
                    val.id === chosenAddress ? "button is-success" : "button"
                  }
                  onClick={(e) => handleChooseAddressClick(e, val.id)}
                >
                  Choose Address
                </button>
              </div>
            </article>
          );
        })}
        <article className="media">
          <div className="media-content content">
            {addressFormOpen ? (
              <AddAddress closeAddressForm={closeAddressForm} />
            ) : (
              <button
                className="button has-text-centered"
                onClick={() => openAddressForm()}
              >
                <AddIcon />
              </button>
            )}
          </div>
        </article>
      </div>
    </div>
  );
};

function AddAddress({ closeAddressForm }) {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [mobile, setMobile] = useState("");
  const [mobileError, setMobileError] = useState("");
  const [pincode, setPincode] = useState("");
  const [pincodeError, setPincodeError] = useState("");
  const [state, setState] = useState("");
  const [stateError, setStateError] = useState("");
  const [addressLine, setAddressLine] = useState("");
  const [addressLineError, setAddressLineError] = useState("");
  const [locality, setLocality] = useState("");
  const [localityError, setLocalityError] = useState("");
  const [city, setCity] = useState("");
  const [cityError, setCityError] = useState("");
  const [typeOfAddress, setTypeOfAddress] = useState("");
  const [typeOfAddressError, setTypeOfAddressError] = useState("");

  const eTypeOfAddress = {
    Home: "Home",
    Office: "Office",
  };
  const eStates = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttarakhand",
    "Uttar Pradesh",
    "West Bengal",
  ];

  async function handleSubmit(e) {
    e.preventDefault();
    const data = {
      name,
      mobile,
      city,
      pincode,
      locality,
      typeOfAddress,
      addressLine,
      state,
    };
    console.log(data);
    const result = await createNewAddress(data);
    if (result.success) {
      closeAddressForm();
    } else {
      handleErrors(result.errors);
    }
  }

  function handleErrors(errors) {
    if (Array.isArray(errors) && errors.length > 0) {
      errors.forEach((error) => {
        console.log(error);
      });
    }
  }

  return (
    <form>
      <div className="field is-horizontal">
        <div className="field-body">
          <div className="field">
            <div className="control ">
              <input
                className={nameError === "" ? "input" : "input is-danger"}
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <p className="help is-success">{nameError}</p>
          </div>
          <div className="field">
            <div className="control ">
              <input
                className={mobileError === "" ? "input" : "input is-danger"}
                type="text"
                placeholder="96666XXXXX"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>
            <p className="help is-success">{mobileError}</p>
          </div>
        </div>
      </div>

      <div className="field">
        <div className="control">
          <input
            className={addressLineError === "" ? "input" : "input is-danger"}
            type="text"
            value={addressLine}
            placeholder="House No. Flat No etc.."
            onChange={(e) => setAddressLine(e.target.value)}
          />
        </div>
        <p className="help is-danger">{addressLineError}</p>
      </div>

      <div className="field is-horizontal">
        <div className="field-body">
          <div className="field">
            <div className="control ">
              <input
                className={cityError === "" ? "input" : "input is-danger"}
                type="text"
                placeholder="City/District"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <p className="help is-success">{cityError}</p>
          </div>
          <div className="field">
            <div className="control ">
              <input
                className={localityError === "" ? "input" : "input is-danger"}
                type="text"
                placeholder="Locality"
                value={locality}
                onChange={(e) => setLocality(e.target.value)}
              />
            </div>
            <p className="help is-success">{localityError}</p>
          </div>
        </div>
      </div>

      <div className="field is-horizontal">
        <div className="field-body">
          <div className="field">
            <div className="control ">
              <input
                className={pincodeError === "" ? "input" : "input is-danger"}
                type="text"
                placeholder="PINCODE"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
              />
            </div>
            <p className="help is-success">{pincodeError}</p>
          </div>
          <div className="field">
            <div className="control">
              <div className="select">
                <select
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                >
                  <option>--Select State--</option>
                  {eStates.map((val) => {
                    return <option value={val}>{val}</option>;
                  })}
                </select>
              </div>
            </div>
            <p className="help is-success">{stateError}</p>
          </div>
        </div>
      </div>

      <div className="field is-horizontal">
        <div className="field-body">
          <div className="field">
            <div className="control">
              <label className="radio">
                <input
                  type="radio"
                  className="m-1"
                  name="question"
                  onChange={() => setTypeOfAddress(eTypeOfAddress.Home)}
                  checked={typeOfAddress === eTypeOfAddress.Home}
                />
                {eTypeOfAddress.Home}
              </label>
              <label className="radio ">
                <input
                  type="radio"
                  className="m-1"
                  name="question"
                  onChange={() => setTypeOfAddress(eTypeOfAddress.Office)}
                  checked={typeOfAddress === eTypeOfAddress.Office}
                />
                {eTypeOfAddress.Office}
              </label>
            </div>
          </div>
          <div className="field"></div>
        </div>
        <p className="help">{typeOfAddressError}</p>
      </div>

      <div className="field is-grouped">
        <div className="control">
          <button
            className="button is-link"
            type="submit"
            onClick={async (e) => await handleSubmit(e)}
          >
            Add Address
          </button>
        </div>
        <div className="control">
          <button
            className="button is-link is-light"
            onClick={() => closeAddressForm()}
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
}

export default Address;
