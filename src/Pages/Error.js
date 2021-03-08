import {
  Box,
  Button,
  Container,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import errorBg from "../images/hero-bg.jpg";
import React from "react";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "calc(100vh - 64px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('${errorBg}') no-repeat center/cover`,
    color: "#fff",
  },
}));

const Error = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box textAlign="center">
        <Typography variant="h1">404</Typography>
        <Typography variant="h1" gutterBottom>
          No Page Found !
        </Typography>
        <Button
          component={Link}
          size="large"
          to="/"
          variant="contained"
          color="secondary"
        >
          Back Home
        </Button>
      </Box>
    </div>
  );
};

export default Error;
