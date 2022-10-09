import React from "react";
import {
  Box,
  Divider,
  Typography,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
// import Paper from "@mui/material/Paper";

const Filters = () => {
  return (
    <Box mr={2}>
      <Typography variant="h6" component={"div"} fontWeight="semibold">
        FILTERS
      </Typography>
      <Divider />
      <Filter />
      <Filter />
      <Filter />
      <Filter />
    </Box>
  );
};

const label = { inputProps: { "aria-label": "CheckBox Demo" } };

const Filter = () => {
  return (
    <Box mb={1}>
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
      <Divider />
    </Box>
  );
};

export default Filters;
