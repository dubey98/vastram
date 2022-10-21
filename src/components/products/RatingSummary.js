import * as React from "react";
import {
  Box,
  CircularProgress,
  Grid,
  LinearProgress,
  Typography,
} from "@mui/material";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import { reviewPerStars, otherReviewFactors } from "src/data/data";

const RatingSummary = () => {
  return (
    <Box my={1}>
      <Grid container columns={2}>
        <Grid
          item
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="col"
          xs={1}
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
        <Grid item xs={1} sn={1} md={1}>
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

export default RatingSummary;
