import type { SxProps, Theme } from "@mui/material";

// Darker blue for header background
export const appBarStyle: SxProps<Theme> = {
  backgroundColor: "#0F2E66", // changed from light to dark
  width: "100%",
};

export const brandBoxStyle: SxProps<Theme> = {
  flexGrow: 1,
  ml: 5,
  display: { xs: "none", md: "flex" },
};

export const brandTextLeft: React.CSSProperties = {
  fontSize: "45px",
  fontFamily: "Overpass",
  color: "#ffffff", // white text
};

export const brandTextRight: React.CSSProperties = {
  fontSize: "45px",
  fontFamily: "Overpass",
  color: "#4DD0E1", // cyan blue for accent
};

export const userBoxStyle: SxProps<Theme> = {
  flexGrow: 0,
  mr: 9,
};

export const cartIconStyle: SxProps<Theme> = {
  justifyContent: "right",
  color: "white", // make cart icon white
};

export const searchBoxStyle: SxProps<Theme> = {
  color: "white",
  flexGrow: 8,
};

export const searchStackStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "left",
};

import { red } from "@mui/material/colors";

export const avatarStyle: SxProps = {
  bgcolor: red[400],
  m: 1,
};

export const menuTypographyStyle: SxProps = {
  display: "flex",
  flexDirection: "column",
  fontSize: "20",
};
