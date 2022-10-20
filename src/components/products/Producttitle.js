import * as React from "react";
import { Box, Typography } from "@mui/material";
import PriceTitle from "@/components/products/Pricetitle";

const ProductTitle = () => {
  return (
    <Box component="div" mb={1}>
      <Typography component="div" fontSize="1.2em" fontWeight="">
        KALINI Women Beige Floral Yoke Design Straight Kurta With Trousers and
        with Dupatta
      </Typography>
      <PriceTitle />
    </Box>
  );
};

export default ProductTitle;
