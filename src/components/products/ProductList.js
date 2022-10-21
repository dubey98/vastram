import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Carousal from "../common/Carousal";
import MediaCard from "./MediaCard";

const ProductList = () => {
  const array = [1, 2, 1, 1, 11, 1, 1, 1, 11, 1];
  return (
    <Box>
      <Typography fontSize="large" fontWeight="bold">
        Similar Products
      </Typography>
      <Grid container my={1} columns={{ xs: 2, sm: 2, md: 4, lg: 8 }} spacing={1}>
        {array.map((index) => {
          return (
            <Grid item xs={1} sm={1} nd={1} lg={1}>
              <MediaCard />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default ProductList;
