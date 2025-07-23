import type { FC, ReactElement } from "react";
import { Box, Typography, Link, AppBar, Toolbar } from "@mui/material";

export const Footer: FC = (): ReactElement => {
  return (
    <AppBar position="static" style={{ backgroundColor: "#143D7A" }}>
      <Toolbar disableGutters>
        <Typography
          style={{
            fontSize: "20px",
            fontFamily: "cursive",
            letterSpacing: 3,
            color: "white",
          }}
          sx={{ ml: 5, py: "0.5rem" }}
        >
          Tendslife
        </Typography>
        <Box
          sx={{
            ml: "auto",
            py: "0.5rem",
            fontSize: "15px",
            color: "white",
            display: "flex",
            gap: 3,
          }}
        >
          <Link color="white" underline={"hover"}>
            [ {`${new Date().getFullYear()}`}
          </Link>{" "}
          <Link color="white" underline={"hover"}>
            AboutUs
          </Link>{" "}
          <Link color="white" underline={"hover"}>
            Customer Care
          </Link>{" "}
          <Link color="white" underline={"hover"}>
            Account
          </Link>{" "}
          <Link color="white" underline={"hover"}>
            Switch Account ]
          </Link>{" "}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
