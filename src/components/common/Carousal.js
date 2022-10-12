import React, { useState } from "react";
import { Box, Button, IconButton, MobileStepper } from "@mui/material";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import SwipeableViews from "react-swipeable-views";
import { width } from "@mui/system";

const buttonStyle = {
  border: "1px solid rgba(0,0,0,0.4)",
  position: "absolute",
  top: "calc(50% - 18px)",
  zIndex: "tooltip",
};

const Carousal = ({ children, enableButtons }) => {
  const [index, setIndex] = useState(0);
  const totalChildren = children.length;

  const handleClick = (nextIndex) => {
    setIndex(Math.abs((index + nextIndex) % totalChildren));
  };

  const handleIndexChange = (step) => {
    setIndex(step);
  };

  return (
    <Box sx={{ position: "relative" }}>
      {enableButtons && (
        <IconButton
          color="primary"
          sx={{
            ...buttonStyle,
            left: 0,
          }}
          size="small"
          onClick={() => handleClick(-1)}
        >
          <ArrowLeftIcon />
        </IconButton>
      )}

      <Box
        sx={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          width: "100%",
        }}
      >
        {/* <Box
          sx={{
            transform: `translateX(-${index}00%)`,
          }}
          component="div"
        > */}
        <SwipeableViews
          index={index}
          onChangeIndex={handleIndexChange}
          enableMouseEvents
        >
          {children}
        </SwipeableViews>
        {/* </Box> */}
      </Box>

      {enableButtons && (
        <IconButton
          sx={{
            ...buttonStyle,
            right: 0,
          }}
          size="small"
          onClick={() => handleClick(1)}
        >
          <ArrowRightIcon />
        </IconButton>
      )}

      <Box
        sx={{
          position: "absolute",
          display: "flex",
          justifyContent: "center",
          width: "100%",
          bottom: "10px",
        }}
      >
        <MobileStepper
          variant="dots"
          steps={totalChildren}
          activeStep={index}
          position="static"
          sx={{ backgroundColor: "transparent", color: "white" }}
        />
      </Box>
    </Box>
  );
};

export const CarousalItem = ({ children }) => {
  return (
    <Box
      sx={{
        display: "inline-block",
        width: "100%",
        textAlign: "center",
      }}
    >
      {children}
    </Box>
  );
};

export default Carousal;
