import {
  Box,
  Button,
  Grid,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import MediaCard from "./MediaCard";
import SwipeableViews from "react-swipeable-views";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";

const ProductList = () => {
  const isMobile = useMediaQuery("max-width:450px")
  console.log(isMobile);
  const array = [1, 2, 1, 1, 11, 1, 1, 1, 11, 1];
  return (
    <Box>
      <Typography fontSize="large" fontWeight="bold">
        Similar Products
      </Typography>
      <Box my={1} position="relative">
        <Box
          position="absolute"
          left={0}
          top={0}
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100%"
          zIndex={10}
        >
          <Box bgcolor="white" borderRadius="50%" p={1}>
            <IconButton
              bgcolor="yellow"
              size="medium"
              sx={{ border: "1px solid", bgcolor: "white" }}
            >
              <ArrowLeftOutlined />
            </IconButton>
          </Box>
        </Box>

        <SwipeableViews
          enableMouseEvents
          style={{ width: "100%" }}
          slideStyle={{ width: "250px" }}
          slot={2}
        >
          {array.map((index) => {
            return (
              <Box mx={1}>
                <MediaCard />
              </Box>
            );
          })}
        </SwipeableViews>

        <Box
          position="absolute"
          right={0}
          top={0}
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100%"
        >
          <Box bgcolor="white" borderRadius="50%" p={1}>
            <IconButton
              bgcolor="yellow"
              size="medium"
              sx={{ border: "1px solid" }}
            >
              <ArrowRightOutlined />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductList;
