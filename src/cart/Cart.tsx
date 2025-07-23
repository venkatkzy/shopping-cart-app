import React , { useState }from "react";

import {
  Stack,
  Typography,
  Button,
  Box,
  Dialog,
  Paper,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import PaymentMethods from "./PaymentDialog.tsx";
import CartItem from "./CartItem.tsx";

import { getTotalItems, calcTotal } from "./utils/cartUtils.ts";
import type { Product } from "../types/productTypes.ts";
import { cartBoxStyle, summaryBoxStyle, buyButtonStyle } from "./styles/cartItemStyles.ts";

type Props = {
  cartItems: Product[];
  addToCart: (clickedItem: Product) => void;
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <>
      <Box sx={cartBoxStyle}>
        <Box flex={1}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Your Shopping Cart
          </Typography>

          {cartItems.length === 0 ? (
            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
              sx={{ mt: 4 }}
            >
              <ShoppingCartIcon fontSize="large" color="disabled" />
              <Typography variant="h5" color="text.secondary">
                Your Cart is Empty
              </Typography>
            </Stack>
          ) : (
            <Stack spacing={2}>
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  addToCart={addToCart}
                  removeFromCart={removeFromCart}
                />
              ))}
            </Stack>
          )}
        </Box>

        <Box sx={summaryBoxStyle}>
          <Paper elevation={3} sx={{ p: 3, borderRadius: 3 }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Order Summary
            </Typography>

            <Typography variant="body1" sx={{ mb: 1 }}>
              Subtotal ({getTotalItems(cartItems)} items):{" "}
              <strong>${calcTotal(cartItems).toFixed(2)}</strong>
            </Typography>

            <Button
              fullWidth
              sx={buyButtonStyle}
              variant="contained"
              onClick={() => setOpenDialog(true)}
              disabled={cartItems.length === 0}
            >
              Proceed to Buy
            </Button>
          </Paper>
        </Box>
      </Box>

      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        maxWidth="sm"
        fullWidth
      >
        <PaymentMethods onClose={() => setOpenDialog(false)} />
      </Dialog>
    </>
  );
};

export default Cart;