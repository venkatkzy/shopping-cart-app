import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Breadcrumbs,
  Link,
  Stack,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";

import { fetchAllCategories } from "../redux/CategorySlice";
import type { RootState, AppDispatch } from "../redux/store";

interface CrumbsProps {
  handleCategoryFilter: (category: string) => void;
}

const Crumbs: React.FC<CrumbsProps> = ({ handleCategoryFilter }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedCategory, setSelectedCategory] =
    useState<string>("All Categories");
  const dispatch = useDispatch<AppDispatch>();
  const { categories, loading, error } = useSelector(
    (state: RootState) => state.categories
  );

  useEffect(() => {
    dispatch(fetchAllCategories());
  }, [dispatch]);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuClick = (category: string) => {
    const displayName =
      category === "all"
        ? "All Categories"
        : category[0].toUpperCase() + category.slice(1);

    handleCategoryFilter(category);
    setSelectedCategory(displayName);
    handleClose();
  };

  return (
    <>
      <Stack direction="row" alignItems="center" sx={{ pl: 6, py: 2 }}>
        <Typography fontSize="25px" sx={{ color: "#7487A4", pr: 2 }}>
          You are here:
        </Typography>

        <Breadcrumbs separator=">" aria-label="breadcrumb">
          <Link
            underline="hover"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleMenuClick("all");
            }}
            sx={{
              fontSize: 20,
              fontFamily: "monospace",
              fontWeight: 700,
              color: "#0F2E66",
            }}
          >
            HOME
          </Link>

          <Typography
            onClick={handleClick}
            sx={{
              fontSize: 20,
              fontFamily: "monospace",
              fontWeight: 700,
              color: "#0F2E66",
              cursor: "pointer",
            }}
          >
            {selectedCategory}
          </Typography>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={() => handleMenuClick("all")}>
              All Categories
            </MenuItem>
            {loading && <MenuItem disabled>Loading...</MenuItem>}
            {error && <MenuItem disabled>Error loading categories</MenuItem>}
            {categories.map((cat) => (
              <MenuItem
                key={cat.category}
                onClick={() => handleMenuClick(cat.category)}
              >
                {cat.category[0].toUpperCase() + cat.category.slice(1)}
              </MenuItem>
            ))}
          </Menu>
        </Breadcrumbs>
      </Stack>

      <Typography
        variant="h4"
        sx={{
          mt: 1,
          mb: 2,
          mx: 6,
          fontFamily: "monospace",
          fontWeight: 800,
          color: "#0F2E66",
        }}
      >
        {selectedCategory}
      </Typography>
    </>
  );
};

export default Crumbs;
