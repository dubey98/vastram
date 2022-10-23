import React, { useEffect, useState } from "react";
import AddressView from "@/components/cartAndCheckout/AddressView";
import CheckoutLayout from "@/components/CheckoutLayout";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import Link from "next/link";
import useGlobalContext from "src/context/GlobalContext";
import BottomAppBar from "@/components/cartAndCheckout/BottomAppBar";
import { addresses } from "src/data/data";

const list = () => {
  const [selectedAddressId, setSelectedAddressId] = useState(null);
  const [defaultAddress, setDefaultAddress] = useState({});
  const { setMobileNavProperties } = useGlobalContext();

  useEffect(() => {
    setMobileNavProperties("Address");
    const _defaultAddress = addresses.filter((address) => address.default)[0];
    setDefaultAddress(_defaultAddress);
    setSelectedAddressId(_defaultAddress.id);
    return () => {
      setMobileNavProperties();
    };
  }, [addresses]);

  const handleChange = (e) => {
    const value = e.target.value;
    if (value) {
      setSelectedAddressId(value);
    }
  };

  return (
    <Box my={2}>
      <Box>
        <Link href="/checkout/address/add">
          <Button variant="outlined" fullWidth>
            ADD NEW ADDRESS
          </Button>
        </Link>
      </Box>
      <Divider />
      <Typography my={1} fontSize="small" fontWeight="bold">
        Default Address
      </Typography>
      <Divider />
      <AddressView
        address={defaultAddress}
        selectedAddressId={selectedAddressId}
        handleChange={handleChange}
      />
      <Typography fontSize="small" my={1} fontWeight="bold">
        Other Address
      </Typography>
      <Divider />
      {addresses.map((address, index) => {
        return address.id !== defaultAddress.id ? (
          <AddressView
            key={index}
            address={address}
            selectedAddressId={selectedAddressId}
            handleChange={handleChange}
          />
        ) : null;
      })}
      <BottomAppBar buttonText="confirm" href="/checkout/address" />
    </Box>
  );
};

list.getLayout = function (page) {
  return <CheckoutLayout>{page}</CheckoutLayout>;
};

export default list;
