import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Carousal, { CarousalItem } from "/src/components/common/Carousal";
import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Divider,
  FormControl,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  LinearProgress,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  OutlinedInput,
  Typography,
} from "@mui/material";
import ProductTitle from "@/components/products/Producttitle";
import SizeDetails from "@/components/products/SizeDetails";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { FolderSpecialOutlined } from "@mui/icons-material";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import { itemData } from "/src/data/imageData";

const Product = () => {
  return (
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
      <Grid
        item
        xs={1}
        sm={1}
        md={1}
        lg={2}
        sx={{ mt: { xs: 0, sm: 0, md: "0.7em" } }}
      >
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
        <Reviews />
      </Grid>
    </Grid>
  );
};

export default Product;

const reviewPerStars = [
  {
    star: 5,
    reviews: 1345,
    totalReviews: 5000,
  },
  {
    star: 4,
    reviews: 2345,
    totalReviews: 5000,
  },
  {
    star: 3,
    reviews: 3345,
    totalReviews: 5000,
  },
  {
    star: 2,
    reviews: 45,
    totalReviews: 5000,
  },
  {
    star: 1,
    reviews: 135,
    totalReviews: 5000,
  },
];

const otherReviewFactors = [
  {
    rating: 3.9,
    text: "Easy to assemble",
    percentage: 85,
  },
  {
    rating: 3.9,
    text: "Easy to assemble, and this is epic",
    percentage: 85,
  },
  {
    rating: 3.9,
    text: "Easy to assemble",
    percentage: 85,
  },
  {
    rating: 3.9,
    text: "Easy to assemble",
    percentage: 85,
  },
];

const Reviews = () => {
  return (
    <Box my={1}>
      <Grid container columns={2}>
        <Grid
          item
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="col"
          sx={1}
          sn={1}
          md={1}
        >
          <Box textAlign="center">
            <Typography component="div" fontWeight="bold" fontSize="2.5em">
              3.9 <StarOutlinedIcon />
            </Typography>
            <Box>5,047 ratings and 724 Reviews</Box>
          </Box>
        </Grid>
        <Grid item sx={{ width: "100%" }} xs={1} sn={1} md={1}>
          {reviewPerStars.map((reviewPerStar, index) => {
            return (
              <Box sx={{ display: "flex", alignItems: "center" }} key={index}>
                <Box sx={{ minWidth: 35 }}>
                  <Typography display="flex" alignItems="center">
                    {reviewPerStar.star} <StarOutlinedIcon fontSize="inherit" />
                  </Typography>
                </Box>
                <Box sx={{ width: "100%", mr: 1 }}>
                  <LinearProgress
                    variant="determinate"
                    value={Math.round(
                      (reviewPerStar.reviews / reviewPerStar.totalReviews) * 100
                    )}
                  />
                </Box>
                <Box sx={{ minWidth: 35 }}>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                  >{`${Math.round(
                    (reviewPerStar.reviews / reviewPerStar.totalReviews) * 100
                  )}%`}</Typography>
                </Box>
              </Box>
            );
          })}
        </Grid>
      </Grid>
      <Grid container my={2} columns={4}>
        {otherReviewFactors.map((otherFactors, index) => {
          return (
            <Grid item textAlign="center" xs={1} sm={1} md={1} px={1}>
              <Box
                sx={{ position: "relative", display: "inline-flex" }}
                key={index}
              >
                <CircularProgress
                  variant="determinate"
                  size={"3.5rem"}
                  value={otherFactors.percentage}
                />
                <Box
                  sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: "absolute",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    variant="caption"
                    component="div"
                    color="text.secondary"
                  >
                    {otherFactors.rating}
                  </Typography>
                </Box>
              </Box>
              <Box>
                <Typography
                  variant="caption"
                  component="div"
                  color="text.secondary"
                >
                  {otherFactors.text}
                </Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

const DelhiveryDetails = () => {
  return (
    <Box mt={2} mb={1}>
      <Box display="flex">
        Delhivery Options
        <Box ml={1}>
          <LocalShippingOutlinedIcon />
        </Box>
      </Box>
      <FormControl sx={{ my: 1 }}>
        <InputLabel htmlFor="outlined-adornment-password">Pincode</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          variant="outlined"
          label="Pincode"
          type={"text"}
          value={""}
          onChange={() => {}}
          endAdornment={
            <InputAdornment position="end">
              <Button
                aria-label="toggle password visibility"
                onClick={() => {}}
                onMouseDown={() => {}}
              >
                CHECK
              </Button>
            </InputAdornment>
          }
        />
      </FormControl>
      <List dense={1}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <FolderSpecialOutlined />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Get it by Mon, Oct 31"
            // secondary={"Secondary text"}
          />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <FolderSpecialOutlined />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Pay on Delivery Available"
            // secondary={"Secondary text"}
          />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <CurrencyExchangeIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Easy 30 day return and Exchange available"
            // secondary={"Secondary text"}
          />
        </ListItem>
      </List>
    </Box>
  );
};
