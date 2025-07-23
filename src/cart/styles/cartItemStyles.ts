// src/cart/styles/ProductStyles.ts
import type { Theme } from "@emotion/react";
import type { SxProps } from "@mui/material";
import type { CSSProperties } from "react";

// === Product Card Styles ===

export const itemBoxStyle: SxProps<Theme> = {
  backgroundColor: "#fff",
  borderRadius: "8px",
  width: 300,
  height: 600,
  boxShadow: 5,
  m: 2,
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  transition: "background-color 0.3s ease",
  "&:hover": {
    backgroundColor: "#f5f8fa",
    ".item-description": {
      WebkitLineClamp: "unset",
      maxHeight: "none",
    },
  },
};

export const boxDisplay: SxProps<Theme> = {
  width: "100%",
  height: 250,
  overflow: "hidden",
  borderTopLeftRadius: "8px",
  borderTopRightRadius: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export const imageDisplay: CSSProperties = {
  width: "100%",
  height: "180px",
  objectFit: "contain",
  display: "block",
};

// === Content Section ===

export const displayContent: SxProps<Theme> = {
  p: 2,
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  overflow: "hidden",
};

export const categoryText: SxProps<Theme> = {
  fontSize: "16px",
  fontWeight: 700,
  color: "#0F2E66",
};

export const titleText: SxProps<Theme> = {
  fontWeight: 800,
  color: "#0F2E66",
};

export const discripContent: SxProps<Theme> = {
  fontSize: "10px",
  fontWeight: 600,
  color: "#7487A4",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitLineClamp: 3,
  WebkitBoxOrient: "vertical",
  maxHeight: "48px",
  transition: "max-height 0.3s ease, -webkit-line-clamp 0.3s ease",
};

// === Footer / Button Section ===

export const ratingBox: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  gap: 1,
};

export const priceDisplay: SxProps<Theme> = {
  fontWeight: "bolder",
  color: "#0F2E66",
  mt: 1,
};

export const buttonStyle: SxProps<Theme> = {
  fontSize: "16px",
  fontWeight: 800,
  borderColor: "#E5E5E5",
  color: "#0F2E66",
  "&:hover": {
    backgroundColor: "#0F2E66",
    color: "#fff",
  },
};

// === Cart Styles (Optional reuse for CartItem.tsx) ===

export const cartItemBoxStyle: SxProps<Theme> = {
  backgroundColor: "#fff",
  borderRadius: "5px",
  width: 400,
  height: 400,
  boxShadow: 5,
  m: 5,
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  "&:hover": {
    backgroundColor: "#f5f8fa",
    ".item-description": {
      WebkitLineClamp: "unset",
      maxHeight: "none",
    },
  },
};

export const imageBoxStyle: SxProps<Theme> = {
  width: "100%",
  height: 250,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export const imageStyle: CSSProperties = {
  width: "100%",
  height: "100%",
  objectFit: "contain",
};

export const buttonGroupStyle: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 2,
  mt: 2,
};

export const smallContainedButtonProps = {
  size: "small" as const,
  variant: "contained" as const,
};

export const cartBoxStyle: SxProps<Theme> = {
  display: "flex",
  flexDirection: { xs: "column", md: "row" },
  gap: 4,
  p: { xs: 2, md: 4 },
  minHeight: "80vh",
};

export const summaryBoxStyle: SxProps<Theme> = {
  width: { xs: "100%", md: "350px" },
  flexShrink: 0,
};

export const buyButtonStyle: SxProps<Theme> = {
  mt: 2,
  py: 1.5,
  fontWeight: "bold",
  fontSize: "1rem",
  borderRadius: 2,
};
