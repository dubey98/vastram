import React from "react";
import { Box, Typography, Chip, Button, Stack, Radio } from "@mui/material";

const AddressView = ({ address = {}, selectedAddressId, handleChange }) => {
  return (
    <Box my={2} display="flex">
      <Box pr={1} flexGrow={0}>
        <Radio
          checked={selectedAddressId == address.id}
          onChange={handleChange}
          value={address.id}
          name="address-radio"
          inputProps={{ "aria-label": address.heading }}
        />
      </Box>

      <Box flexGrow={1}>
        <Box display="flex" justifyContent="space-between">
          <Typography fontWeight="bold">{address.name}</Typography>
          <Chip label={address.type} variant="outlined" size="small" />
        </Box>
        <Typography color="text.secondary" fontSize="small" gutterBottom>
          {address.address} <br />
          {address.locality} <br />
          {address.city}, {address.state} {address.pincode}
        </Typography>
        <Typography color="text.secondary" fontSize="small" gutterBottom>
          Mobile: <strong>{address.mobile}</strong>
        </Typography>
        {address.id == selectedAddressId && (
          <Stack direction="row" gap={1}>
            <Button variant="outlined" size="small">
              REMOVE
            </Button>
            <Button variant="outlined" size="small">
              EDIT
            </Button>
          </Stack>
        )}
      </Box>
    </Box>
  );
};

export default AddressView;
