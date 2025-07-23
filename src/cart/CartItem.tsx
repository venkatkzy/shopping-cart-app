import * as React from "react";
import { Typography, Button, Box } from "@mui/material";

import type { Product } from "../types/productTypes";
import {
  buttonGroupStyle,
  cartItemBoxStyle,
  imageBoxStyle,
  imageStyle,
  smallContainedButtonProps,
} from "./styles/cartItemStyles";
type Props = {
  item: Product;
  addToCart: (clickedItem: Product) => void;
  removeFromCart: (id: number) => void;
};

const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => {
  return (
    <Box sx={cartItemBoxStyle}>
      <Box sx={{ overflow: "hidden" }} justifyContent={"center"}>
        <Typography gutterBottom color="#0F2E66" textAlign={"center"}>
          {item.title}
        </Typography>

        <Box sx={imageBoxStyle} justifyContent="center">
          <img style={imageStyle} src={item.image} alt={item.title} />
        </Box>

        <Typography style={{ fontSize: "20px" }} textAlign={"center"}>
          {item.id} Category: {item.category}
        </Typography>

        <Typography fontSize={"20px"} textAlign={"center"}>
          Price: ${item.price}
        </Typography>
      </Box>

      <Box sx={buttonGroupStyle}>
        <Button
          sx={{ smallContainedButtonProps }}
          onClick={() => removeFromCart(item.id)}
        >
          -
        </Button>

        <Typography variant="h6" align="center">
          Qty: {item.amount}
        </Typography>

        <Button
          sx={{ smallContainedButtonProps }}
          onClick={() => addToCart(item)}
        >
          +
        </Button>
      </Box>
    </Box>
  );
};
export default CartItem;
