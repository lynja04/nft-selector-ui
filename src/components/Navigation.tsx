import React, { ReactElement, ReactNode, useState } from "react";
import { AppBar, IconButton, Toolbar } from "@mui/material";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useAuth } from "../contexts/AuthContext";

type NavigationProps = {
  children: ReactElement<any, string>;
};

const Navigation: React.FC<NavigationProps> = ({ children }) => {
  const { loggedIn, userInfo } = useAuth();

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            NFT Select
          </Typography>
          <Button color="inherit">
            {loggedIn && userInfo ? userInfo.email : ""}
          </Button>
        </Toolbar>
      </AppBar>
      {children}
    </Box>
  );
};

export default Navigation;
