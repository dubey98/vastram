import React from "react";
import { AppBar, Toolbar, Button } from "@mui/material";
import Link from "next/link";

const BottomAppBar = ({ buttonText, href }) => {
  return (
    <AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0 }}>
      <Toolbar>
        <Link href={href}>
          <Button fullWidth color="inherit">
            {buttonText}
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default BottomAppBar;
