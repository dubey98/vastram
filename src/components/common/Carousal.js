import React, { useState } from "react";
import { Box, Button, IconButton, MobileStepper } from "@mui/material";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import SwipeableViews from "react-swipeable-views";

const buttonStyle = {
  // border: "1px solid rgba(0,0,0,0.4)",
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
    <Box sx={{ position: "relative", height: "100%" }} id="1">
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
          height: "100%",
        }}
      >
        <SwipeableViews
          index={index}
          onChangeIndex={handleIndexChange}
          enableMouseEvents
          containerStyle={{ height: "100%" }}
          style={{ height: "100%" }}
        >
          {children}
        </SwipeableViews>
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
          // sx={{
          // background: "transparent",
          //   "& .MuiMobileStepper-dot": {
          //     color: "yellow",
          //   },
          //   "& .MuiMobileStepper-dotActive": {
          //     backgroundColor: "white",
          //   },
          // }}
        />
      </Box>
    </Box>
  );
};

export const CarousalItem = ({ children, height, width }) => {
  return (
    <Box
      sx={{
        display: "inline-block",
        height: height || "100%",
        width: width || "100%",
        textAlign: "center",
        overflow: "hidden",
      }}
      id="CarousalItem"
    >
      {children}
    </Box>
  );
};

export default Carousal;
