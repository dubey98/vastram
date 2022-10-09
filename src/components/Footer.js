import React from "react";
import Container from "@mui/material/Container";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";
import IconAndLogo from "./navbar/IconAndLogo";
import Button from "@mui/material/Button";
import Link from "next/link";

import { pages } from "./../constants/constant";
import Typography from "@mui/material/Typography";

const Item = styled(Paper)(({ theme }) => ({
  width: "100%",
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "primary.dark",
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Footer = () => {
  return (
    <Item>
      <Container maxWidth="xl">
        <Box sx={{ display: "flex", my: 2 }}>
          <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
            <IconAndLogo />
          </Box>
          <Box sx={{ flexGrow: 0, display: "flex" }}>
            {pages.map((page) => (
              <Link href={page.link} key={page.link}>
                <Button sx={{ my: 2, display: "block" }}>
                  {page.displayText}
                </Button>
              </Link>
            ))}
          </Box>
        </Box>
        <Divider />
        <Box sx={{ display: "flex", my: 2 }}>
          <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
            <Typography sx={{ fontSize: "10px" }}>
              &copy; 2022 Shiv Dubey
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 0, display: "flex" }}>
            <Box sx={{ mx: 1 }}>
              <FacebookOutlinedIcon />
            </Box>
            <Box sx={{ mx: 1 }}>
              <TwitterIcon />
            </Box>
            <Box sx={{ mx: 1 }}>
              <InstagramIcon />
            </Box>
            <Box sx={{ mx: 1 }}>
              <LinkedInIcon />
            </Box>
          </Box>
        </Box>
      </Container>
    </Item>
  );
};

export default Footer;
