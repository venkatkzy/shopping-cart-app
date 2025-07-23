import React from "react";

import { Rating, Box, Typography, Button } from "@mui/material";

import type { Product } from "../types/productTypes";
import {
  itemBoxStyle,
  boxDisplay,
  imageDisplay,
  displayContent,
  categoryText,
  titleText,
  discripContent,
  ratingBox,
  priceDisplay,
  buttonStyle,
} from "./styles/cartItemStyles";

type Props = {
  items: Product;
  handleAddToCart: (clickedItem: Product) => void;
  removeFromCart: (id: number) => void;
};

const Item: React.FC<Props> = ({ items, handleAddToCart }) => {
  return (
    <Box sx={itemBoxStyle}>
      <Box sx={boxDisplay}>
        <img style={imageDisplay} src={items.image} alt={items.title} />
      </Box>

      <Box sx={displayContent}>
        <Box sx={{ overflow: "hidden" }}>
          <Typography sx={categoryText}>
            ({items.id}) Category: {items.category}
          </Typography>
          <Typography gutterBottom sx={titleText}>
            {items.title}
          </Typography>
          <Typography className="item-description" sx={discripContent}>
            {items.description}
          </Typography>
        </Box>

        <Box sx={{ mt: 1 }}>
          <Box sx={ratingBox}>
            <Typography sx={{ fontSize: "16px" }}>Rating:</Typography>
            <Rating
              size="small"
              name="Rating"
              value={items.rating.rate}
              precision={0.5}
              readOnly
            />
          </Box>
          <Typography variant="h5" sx={priceDisplay}>
            ${items.price}
          </Typography>
        </Box>
      </Box>

      <Box sx={{ p: 2 }}>
        <Button
          fullWidth
          variant="outlined"
          sx={buttonStyle}
          onClick={() => handleAddToCart(items)}
        >
          Add to cart
        </Button>
      </Box>
    </Box>
  );
};

export default Item;
