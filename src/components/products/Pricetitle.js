import * as React from "react";
import { Box, Typography } from "@mui/material";
import { rupee } from "@/constants/constant";

const PriceTitle = ({ size }) => {
  const isSmall = size === "small";

  return (
    <Box
      component="div"
      fontSize={isSmall ? "1em" : "1.1em"}
      lineHeight={1}
      color={"green"}
    >
      <Typography component="span" fontSize={"1.1em"}>
        {rupee}
        2599
      </Typography>
      <Typography
        component="span"
        ml={1}
        color={"black"}
        fontWeight={"lighter"}
        fontSize={"0.8em"}
        fontStyle="italic"
      >
        {size == "small" ? "" : "MRP"}
        <Box
          sx={{ textDecoration: "line-through", pl: isSmall ? 0 : 1 }}
          component="span"
        >
          {rupee}2699
        </Box>
      </Typography>
      <Typography fontSize={"0.8em"} component="span" ml={1}>
        (76% OFF)
      </Typography>
    </Box>
  );
};

export default PriceTitle;
