import React from "react";
import AdbIcon from "@mui/icons-material/Adb";
import { Typography } from "@mui/material";

const IconAndLogo = ({ mobile }) => {
  const display = mobile
    ? { xs: "flex", md: "none" }
    : { xs: "none", md: "flex" };

  return (
    <>
      <AdbIcon sx={{ display: display, mr: 1 }} />
      <Typography
        variant="h5"
        noWrap
        component="a"
        href=""
        sx={{
          mr: 2,
          display: display,
          flexGrow: mobile ? 1 : 0,
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        LOGO
      </Typography>
    </>
  );
};

export default IconAndLogo;
