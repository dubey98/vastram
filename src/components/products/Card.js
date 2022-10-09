import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Box from "@mui/material/Box";
import { rupee } from "../../constants/constant";

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="255"
        sx={{
          objectFit: "contain",
          objectPosition: "center",
        }}
        image="http://assets.myntassets.com/assets/images/10856160/2019/11/5/f0172470-408a-4b8b-a1e5-045bd98a5f8b1572938035104-SASSAFRAS-Women-Dresses-9581572938032856-1.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Box
          component="div"
          sx={{
            display: "flex",
            alignContent: "center",
          }}
        >
          <Typography flexGrow={1} fontSize={"14px"} variant="h6">
            SASSAFRAS
          </Typography>
          <Box size="small">
            <FavoriteBorderIcon />
          </Box>
        </Box>
        <Typography variant="body2" color="text.secondary">
          Floral Wrap Dress
        </Typography>
        <Box
          sx={{ display: "flex", whiteSpace: "nowrap", alignItems: "center" }}
        >
          <Typography mr={1} fontWeight="bold">
            {rupee}1271
          </Typography>
          <Typography
            fontStyle={"italic"}
            fontSize={"small"}
            mr={1}
            sx={{ textDecoration: "line-through", color: "red" }}
          >
            {rupee}2355
          </Typography>
          <Typography fontSize={"small"} mr={1} color="green">
            47%OFF
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
