import * as React from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Box from "@mui/material/Box";
import Link from "next/link";
import Carousal, { CarousalItem } from "@/components/common/Carousal";
import { Paper } from "@mui/material";
import { itemData } from "src/data/data";
import { Stack } from "@mui/material";
import PriceTitle from "./Pricetitle";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { grey } from "@mui/material/colors";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";

export default function MediaCard({ horizontal }) {
  return (
    <Paper variant="outlined">
      <Stack direction={horizontal ? "row" : "column"}>
        <Box width={horizontal ? "40%" : "100%"}>
          <Carousal>
            {itemData.map((item) => (
              <CarousalItem key={item.img}>
                <Link href={"/product/1234"}>
                  <img
                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                  />
                </Link>
              </CarousalItem>
            ))}
          </Carousal>
        </Box>
        <CardContent>
          <Box
            component="div"
            sx={{
              display: "flex",
              alignContent: "center",
            }}
          >
            <Link href="/product/1234">
              <Typography
                flexGrow={1}
                fontSize={"14px"}
                variant="h6"
                sx={{ cursor: "pointer" }}
              >
                SASSAFRAS
              </Typography>
            </Link>
            <Box size="small">
              <FavoriteBorderIcon />
            </Box>
          </Box>
          <Typography variant="body2" color="text.secondary">
            Floral Wrap Dress
          </Typography>
          {horizontal && (
            <Stack my={1} direction="row" gap={1}>
              <Stack
                direction="row"
                alignItems="center"
                bgcolor={grey[200]}
                px={1}
                sx={{
                  width: "fit-content",
                  borderRadius: "0.5em",
                  cursor: "pointer",
                }}
              >
                <Typography fontSize="small">Size: M</Typography>
                <KeyboardArrowDownOutlinedIcon fontSize="small" />
              </Stack>
              <Stack
                direction="row"
                alignItems="center"
                bgcolor={grey[200]}
                px={1}
                sx={{
                  width: "fit-content",
                  borderRadius: "0.5em",
                  cursor: "pointer",
                }}
              >
                <Typography fontSize="small">Qty: 1</Typography>
                <KeyboardArrowDownOutlinedIcon fontSize="small" />
              </Stack>
            </Stack>
          )}
          <PriceTitle size="small" />
          <Stack direction="row" gap={1} mt={1}>
            <CheckOutlinedIcon fontSize="small" />
            <Typography color="text.secondary" noWrap fontSize="small">
              Delivery By 21st October
            </Typography>
          </Stack>
        </CardContent>
      </Stack>
    </Paper>
  );
}
