import React from "react";
import { Box, Stack, Typography, Paper } from "@mui/material";
import { itemData } from "src/data/data";

const DeliveryEstimates = () => {
  return (
    <Stack my={1} direction="column" gap={1} maxWidth="100%">
      <Typography gutterBottom fontWeight="bold">
        Delivery Estimates
      </Typography>
      {itemData.map((item, index) => {
        return (
          <Paper elevation={1}>
            <Box key={index} display="flex" alignItems="center">
              <Box flexGrow={0} height="3em" overflow="hidden">
                <Box
                  component="img"
                  sx={{
                    height: "3em",
                    width: "auto",
                    objectFit: "contain",
                    objectPosition: "center",
                    overflow: "hidden",
                  }}
                  alt={item.title}
                  src={item.img}
                />
              </Box>
              <Typography
                fontSize="small"
                pl={2}
                color="text.secondary"
                flexGrow={1}
              >
                Estimated Delivery By 28th Oct 2022
              </Typography>
            </Box>
          </Paper>
        );
      })}
    </Stack>
  );
};

export default DeliveryEstimates;
