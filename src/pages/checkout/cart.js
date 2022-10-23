import react, { useEffect } from "react";
import { Button, Typography, Box, Stack } from "@mui/material";
import useGlobalContext from "src/context/GlobalContext";
import { useTheme } from "@mui/material/styles";
import MediaCard from "@/components/products/MediaCard";
import PriceBreakUp from "@/components/cartAndCheckout/PriceBreakUp";
import { Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import CheckoutLayout from "@/components/CheckoutLayout";
import BottomAppBar from "@/components/cartAndCheckout/BottomAppBar";

const cart = () => {
  const theme = useTheme();
  const { setMobileNavProperties } = useGlobalContext();

  useEffect(() => {
    setMobileNavProperties("Shopping Bag");
    return () => {
      setMobileNavProperties();
    };
  }, []);

  return (
    <Container maxWidth="lg">
      <Grid
        container
        columns={{ xs: 1, sm: 1, md: 3, lg: 4 }}
        spacing={2}
        my={2}
        px={0}
      >
        <Grid item xs={1} sm={1} md={2} lg={3}>
          <Box
            display="flex"
            bgcolor="white"
            alignItems="center"
            justifyContent="space-between"
            my={1}
          >
            <Box>
              Deliver to:
              <Typography component="span" fontWeight="bold">
                110011
              </Typography>
            </Box>
            <Button variant="outlined" size="small">
              CHANGE ADDRESS
            </Button>
          </Box>

          <Stack my={2} gap={1}>
            <MediaCard horizontal />
            <MediaCard horizontal />
            <MediaCard horizontal />
          </Stack>
        </Grid>
        <Grid item xs={1} sm={1} md={1} lg={1}>
          <PriceBreakUp />
          <Box display={{ xs: "none", sm: "none", md: "block", lg: "block" }}>
            <Button fullWidth variant="contained" color="primary">
              Place Order
            </Button>
          </Box>
        </Grid>
      </Grid>

      <Box p={2}></Box>

      <Box display={{ xs: "block", sm: "block", md: "none", lg: "none" }}>
        <BottomAppBar buttonText="Place Order" href="/checkout/address" />
      </Box>
    </Container>
  );
};

cart.getLayout = function getLayout(page) {
  return <CheckoutLayout>{page}</CheckoutLayout>;
};

export default cart;
