import React from "react";
import MediaCard from "../../components/products/Card";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import Filters from "../../components/products/Filters";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

const index = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container columns={{ xs: 2, sm: 12, md: 12, lg: 12 }}>
        <Grid item md={3} lg={2}>
          <Box
            sx={{
              display: { xs: "none", sm: "none", md: "block" },
            }}
          >
            <Filters />
          </Box>
        </Grid>

        <Grid item md={9} lg={10}>
          <Grid
            container
            spacing={{ xs: 1, md: 2 }}
            columns={{ xs: 4, sm: 12, md: 12, lg: 5 }}
          >
            {Array.from(Array(6)).map((_, index) => (
              <Grid item xs={2} sm={4} md={4} lg={1} key={index}>
                <Item>
                  <MediaCard />
                </Item>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default index;
