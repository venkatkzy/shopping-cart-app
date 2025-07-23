import { useState } from "react";
import {
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import { avatarStyle, menuTypographyStyle } from "./styles/layoutStyles";


const User = () => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorElUser(event.currentTarget);

  const handleCloseUserMenu = () => setAnchorElUser(null);

  return (
    <>
      <Tooltip title="Open user menu">
        <IconButton onClick={handleOpenUserMenu}>
          <Avatar sx={avatarStyle}>R</Avatar>
        </IconButton>
      </Tooltip>

      <Menu
        sx={{ mt: "45px" }}
        anchorEl={anchorElUser}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <MenuItem onClick={handleCloseUserMenu}>
          <Typography sx={menuTypographyStyle}>Sign In</Typography>
        </MenuItem>
        <MenuItem onClick={handleCloseUserMenu}>
          <Typography sx={menuTypographyStyle}>Inbox</Typography>
        </MenuItem>
        <MenuItem onClick={handleCloseUserMenu}>
          <Typography sx={menuTypographyStyle}>Settings</Typography>
        </MenuItem>
        <MenuItem onClick={handleCloseUserMenu}>
          <Typography sx={menuTypographyStyle}>Logout</Typography>
        </MenuItem>
      </Menu>
    </>
  );
};

export default User;
