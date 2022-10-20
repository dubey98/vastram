import React from "react";

import useThemeContext from "/src/context/ThemeContext";
import { IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const ThemeChanger = () => {
  const { theme, changeTheme } = useThemeContext();
  const handleThemeChange = (e) => {
    theme.palette.mode === "dark" ? changeTheme("light") : changeTheme("dark");
  };
  return (
    <IconButton sx={{ ml: 1 }} onClick={handleThemeChange} color="inherit">
      {theme.palette.mode === "dark" ? (
        <Brightness7Icon />
      ) : (
        <Brightness4Icon />
      )}
    </IconButton>
  );
};

export default ThemeChanger;
