// console.log(images)
//import itemData from '../../assets/genevieve/images';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

// function importAll(r) {
//     return r.keys().map(r);
// }

// // Import all images
// const images = importAll(
//     require.context('../../assets/genevieve/carousel/', false, /\.(png|jpe?g|svg)$/)
//     );

const images = [1]

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  img : {
    width: '100%',
    backgroundColor: 'black',
  },
  gridItem : {
      backgroundColor: 'black',
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();

    return (
    <div className={classes.root}>
    <Grid container spacing={1}>
        {
            images.map(i => (
                <Grid item key={i.default} className={classes.gridItem} xs={12} sm={8} md={6} lg={6} xl={3}>
                        <img className={classes.img} src={i.default} alt={'Pic'} />
                </Grid>  
            ))
        }
    </Grid>
    </div>
    );
}