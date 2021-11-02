import React from "react";
import type { FC } from "react";
import { Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  title: {
    display: 'flex',
    alignItems: 'center',
    position: "absolute",
    left: "39.48%",
    right: " 45.47%",
    top: "12.04%",
    bottom: "81.94%",

    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: 400 ,
    // fontSize: " 48px",
    lineHeight: "65px",
  
    letterSpacing: "0.08em",

    /* Neutral/200 */
    color: "#313131",
  },
}));

const Board: FC = () => {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h4" className={classes.title}>
        TO Do LIST
      </Typography>
    </div>
  );
};

export default Board;
