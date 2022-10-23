import React from "react";
import { Button, Typography, Box, Divider } from "@mui/material";
import { rupee } from "@/constants/constant";

const PriceBreakUp = () => {
  const couponApplied = false;
  const convenienceFeeWaived = true;

  return (
    <Box my={1}>
      <Typography gutterBottom fontWeight="bold">
        Price Details
      </Typography>
      <Divider />
      <Box my={1}>
        <Box display="flex" justifyContent="space-between">
          <Typography gutterBottom color="text.secondary">
            Total MRP
          </Typography>
          <Typography fontWeight="bold">{rupee} 599</Typography>
        </Box>
      </Box>
      <Box my={1}>
        <Box
          display="flex"
          justifyContent="space-between"
          color="text.secondary"
        >
          <Typography gutterBottom>Discount on MRP</Typography>
          <Typography fontWeight="light">- {rupee}399</Typography>
        </Box>
      </Box>
      <Box my={1}>
        <Box display="flex" justifyContent="space-between">
          <Typography gutterBottom color="text.secondary">
            Coupon Discount
          </Typography>
          {couponApplied ? (
            <Typography fontWeight="bold">{rupee} 599</Typography>
          ) : (
            <Button size="small">Apply Coupon</Button>
          )}
        </Box>
      </Box>
      <Box my={1}>
        <Box display="flex" justifyContent="space-between">
          <Typography gutterBottom color="text.secondary">
            Convenience Fee
          </Typography>
          <Box display="flex">
            <Typography
              mr={1}
              sx={{
                textDecoration: convenienceFeeWaived ? "line-through" : "",
              }}
            >
              {rupee}99
            </Typography>
            {convenienceFeeWaived && (
              <Typography color="lightgreen">FREE</Typography>
            )}
          </Box>
        </Box>
      </Box>
      <Divider />
      <Box my={1}>
        <Box display="flex" justifyContent="space-between">
          <Typography fontWeight="bold" gutterBottom color="text.secondary">
            Total Amount
          </Typography>
          <Typography mr={1} fontWeight="bold">
            {rupee}498
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default PriceBreakUp;
