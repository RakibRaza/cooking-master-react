import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import { Fab } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  backHome: {
    position: "fixed",
    bottom: "5%",
    right: "5%",
    zIndex: theme.zIndex.tooltip,
  },
}));
const Scroll = ({ showBelow }) => {
  const classes = useStyles();
  const [show, setShow] = useState(showBelow ? false : true);

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true);
    } else {
      if (show) setShow(false);
    }
  };

  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` });
  };

  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleScroll);
      return () => window.removeEventListener(`scroll`, handleScroll);
    }
  });
  return (
    <div>
      {show && (
        <Fab
          onClick={handleClick}
          color="secondary"
          className={classes.backHome}
        >
          <ArrowUpwardIcon />
        </Fab>
      )}
    </div>
  );
};
export default Scroll;
