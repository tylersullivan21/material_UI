import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ImgMediaCard from '../Card'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
         <ImgMediaCard/>
        </Grid>
        <Grid item xs={12} sm={6}>
        <ImgMediaCard/>
        </Grid>
        <Grid item xs={12} sm={6}>
        <ImgMediaCard/>
        </Grid>
        <Grid item xs={6} sm={3}>
        <ImgMediaCard/>
        </Grid>
        <Grid item xs={6} sm={3}>
        <ImgMediaCard/>
        </Grid>
        <Grid item xs={6} sm={3}>
        <ImgMediaCard/>
        </Grid>
        <Grid item xs={6} sm={3}>
        <ImgMediaCard/>
        </Grid>
      </Grid>
    </div>
  );
}