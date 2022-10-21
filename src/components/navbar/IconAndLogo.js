import React from "react";
import AdbIcon from "@mui/icons-material/Adb";
import Typography from "@mui/material/Typography";
import { Box, Stack } from "@mui/material";
import Link from "next/link";

const IconAndLogo = ({ mobile, showOnBoth }) => {
  const display = showOnBoth
    ? "flex"
    : mobile
    ? { xs: "flex", md: "none" }
    : { xs: "none", md: "flex" };

  return (
    <Link href="/">
      <Stack direction="row" alignItems="center" gap={1}>
        <AdbIcon sx={{ display: display }} />
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
      </Stack>
    </Link>
  );
};

export default IconAndLogo;
