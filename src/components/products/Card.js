import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Box from "@mui/material/Box";
import { rupee } from "../../constants/constant";
import Link from "next/link";
import Carousal, { CarousalItem } from "../common/Carousal";

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Link href="/product/1234">
        {/* <CardMedia
          component="img"
          height="255"
          sx={{
            objectFit: "contain",
            objectPosition: "center",
            cursor: "pointer",
          }}
          image="http://assets.myntassets.com/assets/images/10856160/2019/11/5/f0172470-408a-4b8b-a1e5-045bd98a5f8b1572938035104-SASSAFRAS-Women-Dresses-9581572938032856-1.jpg"
          alt="green iguana"
        /> */}
        <Carousal>
          {itemData.map((item) => (
            <CarousalItem key={item.img}>
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </CarousalItem>
          ))}
        </Carousal>
      </Link>
      <CardContent>
        <Box
          component="div"
          sx={{
            display: "flex",
            alignContent: "center",
          }}
        >
          <Link href="/product/1234">
            <Typography
              flexGrow={1}
              fontSize={"14px"}
              variant="h6"
              sx={{ cursor: "pointer" }}
            >
              SASSAFRAS
            </Typography>
          </Link>
          <Box size="small">
            <FavoriteBorderIcon />
          </Box>
        </Box>
        <Typography variant="body2" color="text.secondary">
          Floral Wrap Dress
        </Typography>
        <Box
          sx={{ display: "flex", whiteSpace: "nowrap", alignItems: "center" }}
        >
          <Typography mr={1} fontWeight="bold">
            {rupee}1271
          </Typography>
          <Typography
            fontStyle={"italic"}
            fontSize={"small"}
            mr={1}
            sx={{ textDecoration: "line-through", color: "red" }}
          >
            {rupee}2355
          </Typography>
          <Typography fontSize={"small"} mr={1} color="green">
            47%OFF
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
  },
];
