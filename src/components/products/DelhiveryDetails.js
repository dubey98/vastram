import * as React from "react";
import {
  Avatar,
  Box,
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { FolderSpecialOutlined } from "@mui/icons-material";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";

const DelhiveryDetails = () => {
  return (
    <Box mt={2} mb={1}>
      <Box display="flex">
        Delhivery Options
        <Box ml={1}>
          <LocalShippingOutlinedIcon />
        </Box>
      </Box>
      <FormControl sx={{ my: 1 }}>
        <InputLabel htmlFor="outlined-adornment-password">Pincode</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          variant="outlined"
          label="Pincode"
          type={"text"}
          value={""}
          onChange={() => {}}
          endAdornment={
            <InputAdornment position="end">
              <Button
                aria-label="toggle password visibility"
                onClick={() => {}}
                onMouseDown={() => {}}
              >
                CHECK
              </Button>
            </InputAdornment>
          }
        />
      </FormControl>
      <List dense={true}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <FolderSpecialOutlined />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Get it by Mon, Oct 31"
            // secondary={"Secondary text"}
          />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <FolderSpecialOutlined />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Pay on Delivery Available"
            // secondary={"Secondary text"}
          />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <CurrencyExchangeIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Easy 30 day return and Exchange available"
            // secondary={"Secondary text"}
          />
        </ListItem>
      </List>
    </Box>
  );
};

export default DelhiveryDetails;
