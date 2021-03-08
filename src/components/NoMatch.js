import { Box, makeStyles, Typography } from "@material-ui/core";

import React from "react";
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "calc(100vh - 270px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const NoMatch = () => {
  const classes = useStyles();
  return (
    <Box textAlign="center" className={classes.root}>
      <Typography variant="h1">No Meals Found!</Typography>
    </Box>
  );
};

export default NoMatch;
