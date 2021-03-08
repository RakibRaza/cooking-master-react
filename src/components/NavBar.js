import {
  AppBar,
  Button,
  Container,
  IconButton,
  makeStyles,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState } from "react";
import Scroll from "./Scroll";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  nav: {
    boxShadow: "none",
    background: "#fff176",
    color: "#000",
  },
  sectionDesktope: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  mobileMenu: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

const NavBar = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar className={classes.nav} position="static">
        <Container>
          <Toolbar>
            <Typography style={{ flexGrow: 1 }} variant="h5">
              Cooking Master
            </Typography>
            <div className={classes.sectionDesktope}>
              <Button component={Link} to="/">
                Home
              </Button>
              <Button component={Link} to="/about">
                About
              </Button>
              <Button component={Link} to="/contact">
                Contact
              </Button>
            </div>
            <IconButton
              className={classes.mobileMenu}
              onClick={handleClick}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              className={classes.mobileMenu}
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem component={Link} to="/" onClick={handleClose}>
                Home
              </MenuItem>
              <MenuItem component={Link} to="/about" onClick={handleClose}>
                About
              </MenuItem>
              <MenuItem component={Link} to="/contact" onClick={handleClose}>
                Contact
              </MenuItem>
            </Menu>
          </Toolbar>
          <Scroll showBelow={250} />
        </Container>
      </AppBar>
    </>
  );
};

export default NavBar;
