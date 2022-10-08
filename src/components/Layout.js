import React from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";
import { ThemeProvider } from "@mui/material";
import useThemeContext from "../context/ThemeContext";

const Layout = ({ children }) => {
  const { theme } = useThemeContext();

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
