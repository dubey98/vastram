import React from "react";
import { Box, Typography } from "@mui/material";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import { green } from "@mui/material/colors";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import { Stack } from "@mui/material";

const reviews = [
  {
    rating: 5,
    title: "Does the job",
    review: `Chair is comfortable. In this price range it is decent. Hands rests are
        not as much comfortable specially they are not adjustable so sometime it
        makes more incomfortable. Else cushion is fine. Wheels are smooth.
        Sturdy material used, strong build.`,
    user: {
      displayName: "Shiv Dubey",
    },
    reviewDate: "12-12-2022",
    likes: 456,
    dislikes: 45,
  },
  {
    rating: 4,
    title: "Does the job",
    review: `Chair is comfortable. In this price range it is decent. Hands rests are
        not as much comfortable specially they are not adjustable so sometime it
        makes more incomfortable. Else cushion is fine. Wheels are smooth.
        Sturdy material used, strong build.`,
    user: {
      displayName: "Shiv Dubey",
    },
    reviewDate: "12-12-2022",
    likes: 456,
    dislikes: 45,
  },
  {
    rating: 5,
    title: "Does the job",
    review: `Chair is comfortable. In this price range it is decent. Hands rests are
        not as much comfortable specially they are not adjustable so sometime it
        makes more incomfortable. Else cushion is fine. Wheels are smooth.
        Sturdy material used, strong build.`,
    user: {
      displayName: "Shiv Dubey",
    },
    reviewDate: "12-12-2022",
    likes: 456,
    dislikes: 45,
  },
  {
    rating: 5,
    title: "Does the job",
    review: `Chair is comfortable. In this price range it is decent. Hands rests are
        not as much comfortable specially they are not adjustable so sometime it
        makes more incomfortable. Else cushion is fine. Wheels are smooth.
        Sturdy material used, strong build.`,
    user: {
      displayName: "Shiv Dubey",
    },
    reviewDate: "12-12-2022",
    likes: 456,
    dislikes: 45,
  },
];

const Reviews = () => {
  return (
    <Box my={1}>
      {reviews.map((review, index) => {
        return (
          <Box>
            <Box display="flex" alignItems="center">
              <Stack
                direction="row"
                px={1}
                gap={1}
                alignItems="center"
                boxSizing="border-box"
                mr={1}
                my={1}
                borderRadius="0.5em"
                fontSize="0.8em"
                bgcolor={green[300]}
              >
                {review.rating}
                <StarOutlinedIcon fontSize="xs" />
              </Stack>
              <Typography fontSize="large" fontWeight={500}>
                {review.title}
              </Typography>
            </Box>
            <Typography fontSize="0.8em">{review.review}</Typography>
            <Box
              my={1}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box fontSize="0.8em" fontWeight="lighter">
                {review.user && review.user.displayName}
                <Box component="span" ml={1} fontSize="0.8em">
                  {review.reviewDate}
                </Box>
              </Box>
              <Stack direction="row" gap={1} alignItems="center">
                <Stack alignItems="center" direction="row" gap={1}>
                  <ThumbUpOutlinedIcon fontSize="small" />
                  {review.likes}
                </Stack>
                <Stack alignItems="center" direction="row" gap={1}>
                  <ThumbDownOffAltOutlinedIcon fontSize="small" />
                  {review.dislikes}
                </Stack>
              </Stack>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default Reviews;
