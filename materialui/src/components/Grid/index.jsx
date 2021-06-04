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
        <Grid alignContent={"center"} item xs={4}>
          <Card />
        </Grid>
        <Grid alignContent={"center"} item xs={4}>
        <Card />
        </Grid>
        <Grid alignContent={"center"} item xs={4}>
        <Card />
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
      
        <Grid container item xs={12} alignContent={"center"} spacing={1}>
          <InnerGrid />
          <Grid container item xs={12} spacing={1} alignContent={"center"}>
          <InnerGrid />
        </Grid>
        </Grid>
      </Grid>
    </div>
  );
}