import * as React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import PriceTitle from "../../components/products/Pricetitle";

const SizeDetails = () => {
  const sizes = ["S", "M", "L", "XL", "XXL"];
  const theme = useTheme();

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" my={2}>
        <Box>Select Size</Box>
        <Box>SIZE CHART</Box>
      </Box>
      <Box>
        <Typography>Body Measurement: To Fit Chest 36.0in</Typography>
        <Box
          display="flex"
          sx={{ "& :not(:first-child)": { marginLeft: "10px" } }}
          my={1}
        >
          {sizes.map((size, index) => {
            return (
              <Box
                border="1px solid"
                display="flex"
                justifyContent="center"
                borderRadius="50%"
                alignItems="center"
                height="50px"
                width="50px"
                key={index}
              >
                {size}
              </Box>
            );
          })}
        </Box>
        <Box>
          <PriceTitle />
        </Box>
        <Typography></Typography>
      </Box>
    </Box>
  );
};

export default SizeDetails;
