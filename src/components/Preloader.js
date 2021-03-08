import { Box, makeStyles } from "@material-ui/core";
import React from "react";
import preloader from "../images/preloader.gif";
const useStyles = makeStyles((theme) => ({
  loader: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "calc(100vh - 64px)",
  },
}));
const Preloader = () => {
  const classes = useStyles();
  return (
    <Box className={classes.loader}>
      <img src={preloader} alt="preloader" />
    </Box>
  );
};

export default Preloader;
