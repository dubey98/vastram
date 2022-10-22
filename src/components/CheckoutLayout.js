import React from "react";
import MobileTopNavBar from "./navbar/MobileTopNavbar";
import Box from "@mui/material/Box";
import { ThemeProvider } from "@mui/material";
import useThemeContext from "src/context/ThemeContext";

const CheckoutLayout = ({ children }) => {
  const { theme } = useThemeContext();
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <MobileTopNavBar />
        <main>{children}</main>
      </Box>
    </ThemeProvider>
  );
};

export default CheckoutLayout;
