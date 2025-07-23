import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { Grid, Typography, CircularProgress } from "@mui/material";
import DangerousIcon from "@mui/icons-material/Dangerous";

import Item from "./ProductCard";
import Header from "../layout/Header";
import Crumbs from "../layout/Breadcrumbs";
import Footer from "../layout/Footer";

import { type Product } from "../types/productTypes";
import type { RootState } from "../redux/store";

const CartContainer: React.FC = () => {
  const [cartItems, setCartItems] = useState([] as Product[]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const searchTerm = useSelector((state: RootState) => state.search.searchTerm);
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: async (): Promise<Product[]> => {
      const { data } = await axios.get("https://fakestoreapi.com/products");
      return data;
    },
  });

  useEffect(() => {
    if (products) {
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [products, searchTerm]);

  const handleCategoryFilter = (category: string) => {
    if (products) {
      const filtered = category
        ? products.filter((product) => product.category === category)
        : products;
      setFilteredProducts(filtered);
    }
  };

  const handleAddToCart = (clickedItem: Product) => {
    setCartItems((prev) => {
      const isItemInCart = prev.find((item) => item.id === clickedItem.id);
      if (isItemInCart) {
        return prev.map((item) =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }
      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };
  const removeFromCart = (id: number) => {
    setCartItems((prev) =>
      prev.reduce((acc, item) => {
        if (item.id === id) {
          if (item.amount === 1) return acc; // Don't decrease below 1
          return [...acc, { ...item, amount: item.amount - 1 }];
        } else {
          return [...acc, item];
        }
      }, [] as Product[])
    );
  };

  if (isLoading)
    return (
      <Typography
        sx={{ px: "750px" }}
        style={{
          fontSize: "50px",
          fontWeight: "600",
          fontFamily: "monospace",
        }}
        color="#0F2E66"
      >
        <CircularProgress color="success" /> Loading...
      </Typography>
    );

  if (isError)
    return (
      <Typography variant="h1">
        <DangerousIcon fontSize="large" /> Something went wrong...
      </Typography>
    );

  return (
    <>
      <Header
        addToCart={handleAddToCart}
        cartItems={cartItems}
        removeFromCart={removeFromCart}
      />
      <Crumbs handleCategoryFilter={handleCategoryFilter} />

      <Grid
        container
        spacing={2}
        sx={{
          width: "100%",
          flexWrap: "wrap",
          justifyContent: "center",
          px: 3,
          mt: 2,
        }}
      >
        {filteredProducts.map((product) => (
          <Item
            key={product.id}
            items={product}
            handleAddToCart={handleAddToCart}
            removeFromCart={removeFromCart}
          />
        ))}
      </Grid>

      <Footer />
    </>
  );
};

export default CartContainer;
