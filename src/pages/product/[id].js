import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Carousal, { CarousalItem } from "/src/components/common/Carousal";
import { Box, Button, Divider, Grid } from "@mui/material";
import ProductTitle from "@/components/products/Producttitle";
import SizeDetails from "@/components/products/SizeDetails";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { itemData } from "/src/data/data";
import RatingSummary from "@/components/products/RatingSummary";
import DelhiveryDetails from "@/components/products/DelhiveryDetails";
import Reviews from "@/components/products/Reviews";
import ProductList from "@/components/products/ProductList";

const Product = () => {
  return (
    <Box>
      <Grid container columns={{ xs: 1, sm: 1, md: 2, lg: 5 }} spacing={2}>
        <Grid item xs={1} sm={1} md={1} lg={3}>
          <Box
            sx={{
              display: { sm: "block", md: "none" },
              height: "30em",
            }}
          >
            <Carousal enableButtons={false}>
              {itemData.map((item) => (
                <CarousalItem key={item.img}>
                  <img
                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                    style={{
                      objectFit: "contain",
                      objectPosition: "center",
                      height: "100%",
                      width: "100%",
                    }}
                  />
                </CarousalItem>
              ))}
            </Carousal>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
            <ImageList sx={{ width: "100%" }} cols={2}>
              {itemData.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Box>
        </Grid>
        <Grid item xs={1} sm={1} md={1} lg={2} mt="0.7em">
          <ProductTitle />
          <Divider />
          <SizeDetails />
          <Divider />
          <Box width="100%" display="flex" my={1}>
            <Button
              variant="outlined"
              startIcon={<ShoppingBagIcon />}
              sx={{ width: "50%" }}
              size="large"
            >
              Add To Bag
            </Button>
            <Button
              variant="contained"
              startIcon={<FavoriteBorderIcon />}
              sx={{ ml: 1, width: "50%" }}
              size="large"
            >
              WishList
            </Button>
          </Box>
          <Divider />
          <DelhiveryDetails />
          <Divider />
          <RatingSummary />
          <Divider />
          <Reviews />
        </Grid>
      </Grid>
      <Box my={1}>
        <ProductList />
      </Box>
    </Box>
  );
};

export default Product;
