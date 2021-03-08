import { Link, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  footer: {
    background: " #ffee58",
    padding: theme.spacing(2),
    boxShadow: theme.shadows[4],
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Typography align="center">
        Programming Hero Learner. Copyright © {new Date().getFullYear()} | Rakib
        Raza All Right Reserved.
      </Typography>
    </footer>
  );
};

export default Footer;
