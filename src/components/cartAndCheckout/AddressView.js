import React from "react";
import { Box, Typography, Chip, Button } from "@mui/material";

const AddressView = () => {
  return (
    <Box my={2} px={1}>
      <Box display="flex" justifyContent="space-between">
        <Typography fontWeight="bold">Shiv Dubey</Typography>
        <Chip label="Home" variant="outlined" size="small" />
      </Box>
      <Typography color="text.secondary" fontSize="small" gutterBottom>
        House No 922, Gokuldham Society <br />
        Sector 21, Pocket C <br />
        Gurugram, Haryana 110011
      </Typography>
      <Button variant="outlined" fullWidth>
        change or add address
      </Button>
    </Box>
  );
};

export default AddressView;
