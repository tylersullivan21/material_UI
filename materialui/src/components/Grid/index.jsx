import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Card from "../Card";
const classes = {
  root: {
    flexGrow: 1
  },
  paper: {
    padding: 20,
    margin:50,
    textAlign: "center",
    color: "#777"
  }
};

export default function NestedGridDemo() {
  function InnerGrid() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Card />
        </Grid>
        <Grid item xs={4}>
        <Card />
        </Grid>
        <Grid item xs={4}>
        <Card />
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
      
        <Grid container item xs={12} spacing={3}>
          <InnerGrid />
          <Grid container item xs={12} spacing={3}>
          <InnerGrid />
        </Grid>
        </Grid>
      </Grid>
    </div>
  );
}