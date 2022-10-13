import React from "react";
import {
  Box,
  Stack,
  Divider,
  Typography,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
// import Paper from "@mui/material/Paper";

const Filters = () => {
  return (
    <Stack divider={<Divider />} px={2} py={1} spacing={1}>
      <Typography variant="h6" component={"div"} fontWeight="semibold">
        FILTERS
      </Typography>
      <Filter />
      <Filter />
      <Filter />
      <Filter />
    </Stack>
  );
};

const label = { inputProps: { "aria-label": "CheckBox Demo" } };

const Filter = () => {
  return (
    <Box>
      <FormGroup>
        <Typography mt={1}>Category</Typography>
        <FormControlLabel
          control={<Checkbox size="small" />}
          label={<Typography fontSize={"small"}>World</Typography>}
          sx={{
            mb: -1,
          }}
        />
        <FormControlLabel
          control={<Checkbox size="small" />}
          label={<Typography fontSize={"small"}>World</Typography>}
        />
      </FormGroup>
    </Box>
  );
};

export default Filters;
