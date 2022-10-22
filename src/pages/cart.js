import react, { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Button, Typography, Box, Stack } from "@mui/material";
import useGlobalContext from "src/context/GlobalContext";
import { useTheme } from "@mui/material/styles";
import MediaCard from "@/components/products/MediaCard";
import { PriceBreakUp } from "@/components/cartAndCheckout/PriceBreakUp";
import { Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

const cart = () => {
  const theme = useTheme();
  const { setTopNav, setFooter, setMobileLimitedMenu } = useGlobalContext();

  useEffect(() => {
    setFooter(false);
    setMobileLimitedMenu("Back To Shopping");
    return () => {
      setFooter(true);
      setMobileLimitedMenu();
    };
  }, []);

  return (
    <Container maxWidth="lg" sx={{ px: 0 }}>
      <Grid
        container
        columns={{ xs: 1, sm: 1, md: 3, lg: 4 }}
        spacing={2}
        mx={0}
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
        <AppBar
          position="fixed"
          color="primary"
          sx={{ top: "auto", bottom: 0 }}
        >
          <Toolbar>
            <Button fullWidth color="inherit">
              Place Order
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </Container>
  );
};

export default cart;
