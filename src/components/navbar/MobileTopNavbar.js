import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

import ThemeChanger from "./ThemeChanger";
import IconAndLogo from "./IconAndLogo";
import MobileDrawerControl from "@/components/navbar/MobileDrawerControl";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { pages, settings } from "@/constants/constant";
import Link from "next/link";
import { useRouter } from "next/router";

const MobileTopNavBar = () => {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton
            onClick={handleBackClick}
            color="inherit"
            aria-controls="back Button"
            aria-label="back button"
          >
            <ArrowBackOutlinedIcon />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default MobileTopNavBar;
