import React, { useEffect } from "react";
import CheckoutLayout from "@/components/CheckoutLayout";
import useGlobalContext from "src/context/GlobalContext";
import { Box, Button, Chip, Divider, Typography } from "@mui/material";
import PriceBreakUp from "@/components/cartAndCheckout/PriceBreakUp";
import AddressView from "@/components/cartAndCheckout/AddressView";
import DeliveryEstimates from "@/components/cartAndCheckout/DeliveryEstimates";
import BottomAppBar from "@/components/cartAndCheckout/BottomAppBar";
import Link from "next/link";

const address = () => {
  const { setMobileNavProperties } = useGlobalContext();

  useEffect(() => {
    setMobileNavProperties("Address");
    return () => {
      setMobileNavProperties();
    };
  }, []);

  return (
    <Box>
      <AddressView />
      <Box>
        <Link href="/checkout/address/list">
          <Button variant="outlined" fullWidth>
            change or add address
          </Button>
        </Link>
      </Box>
      <Divider />
      <DeliveryEstimates />
      <Divider />
      <PriceBreakUp />
      <Divider />
      <Box p={3}></Box>
      <BottomAppBar buttonText="continue" href="/checkout/payment" />
    </Box>
  );
};

address.getLayout = function getLayout(page) {
  return <CheckoutLayout>{page}</CheckoutLayout>;
};

export default address;
