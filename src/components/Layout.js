import React from "react";

import Navbar from "./navbar/Navbar";
import Footer from "./Footer";
import { ThemeProvider, Container, Box } from "@mui/material";
import useThemeContext from "../context/ThemeContext";
import useGlobalContext, {
  GlobalContextProvider,
} from "src/context/GlobalContext";

const Layout = ({ children }) => {
  const { theme } = useThemeContext();
  const { topNav, footer } = useGlobalContext();

  return (
    <ThemeProvider theme={theme}>
      <Box>
        {topNav && <Navbar />}
        <Container maxWidth="xl" sx={{ marginBottom: "2em", marginTop: "2em" }}>
          {children}
        </Container>
        {footer && <Footer />}
      </Box>
    </ThemeProvider>
  );
};

export default Layout;
