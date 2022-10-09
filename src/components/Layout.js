import React from "react";

import Navbar from "./navbar/Navbar";
import Footer from "./Footer";
import { ThemeProvider, Container } from "@mui/material";
import useThemeContext from "../context/ThemeContext";

const Layout = ({ children }) => {
  const { theme } = useThemeContext();

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Navbar />
        <Container maxWidth="xl" sx={{ marginBottom: "2em", marginTop: "2em" }}>
          {children}
        </Container>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
