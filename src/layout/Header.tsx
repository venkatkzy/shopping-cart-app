import React, { type ChangeEvent, useState } from "react";

import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Badge,
  Drawer,
  Stack,
} from "@mui/material";
import AddShoppingCartSharpIcon from "@mui/icons-material/AddShoppingCartSharp";

import Cart from "../cart/Cart";
import User from "./User";
import Search from "../cart/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "../redux/searchSlice";
import { getTotalItems } from "../cart/utils/cartUtils";
import type { RootState } from "../redux/store";
import type { Product } from "../types/productTypes";
import {
  appBarStyle,
  brandBoxStyle,
  brandTextLeft,
  brandTextRight,
  userBoxStyle,
  cartIconStyle,
  searchBoxStyle,
  searchStackStyle,
} from "./styles/layoutStyles";

interface HeaderProps {
  addToCart: (clickedItem: Product) => void;
  removeFromCart: (id: number) => void;
  cartItems: Product[];
}

const Header: React.FC<HeaderProps> = ({
  addToCart,
  cartItems,
  removeFromCart,
}) => {
  const [cartOpenLocal, setCartOpenLocal] = useState(false);
  const dispatch = useDispatch();
  const searchTerm = useSelector((state: RootState) => state.search.searchTerm);

  const handleOpenCart = () => {
    setCartOpenLocal(true);
  };

  const handleCloseCart = () => {
    setCartOpenLocal(false);
  };

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeSearchTerm(event.target.value));
  };

  return (
    <>
      <AppBar position="sticky" sx={appBarStyle}>
        <Toolbar disableGutters>
          <Box sx={brandBoxStyle}>
            <Typography color="#0F2E66" style={brandTextLeft}>
              Tends
            </Typography>
            <Typography color="#0093ED" style={brandTextRight}>
              life
            </Typography>
          </Box>
          <Box sx={searchBoxStyle}>
            <Stack style={searchStackStyle}>
              <Search value={searchTerm} onChangeData={handleSearchChange} />
            </Stack>
          </Box>
          <Box sx={userBoxStyle}>
            <User />
            <Drawer
              anchor="right"
              open={cartOpenLocal}
              onClose={handleCloseCart}
            >
              <Cart
                cartItems={cartItems}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
              />
            </Drawer>
            <IconButton sx={cartIconStyle} onClick={handleOpenCart}>
              <Badge badgeContent={getTotalItems(cartItems)} color="primary">
                <AddShoppingCartSharpIcon fontSize="large" />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
