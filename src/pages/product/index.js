import React, { useState } from "react";
import MediaCard from "../../components/products/MediaCard";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Stack, Pagination } from "@mui/material";

import Filters from "../../components/products/Filters";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

const index = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 100;

  const handlePageChange = (e, value) => {
    setCurrentPage(value);
  };

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
          <Box py={2} display="flex" justifyContent={"center"}>
            <Stack spacing={2}>
              <Pagination
                count={totalPages}
                page={currentPage}
                onChange={handlePageChange}
                color="primary"
                variant="outlined"
                siblingCount={0}
              />
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default index;
