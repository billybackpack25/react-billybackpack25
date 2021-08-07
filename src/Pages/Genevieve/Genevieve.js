import React from 'react';
//import { Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Hero, NavBar } from '../../components';

import GandGImmage from '../../assets/GandB560x315_mask_feathered.png';

import { useAuth } from '../../Context/AuthContext'; 


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: '#f2f2f2',//theme.palette.background.paper,
      alignItems: 'center',
    },
    title: {
        marginTop: theme.spacing(8),
        ...theme.typography.button,
    },
    img : {
        width: '100%',
        height: '100%'
    },
    imgContainer : {
        backgroundColor: 'rgba(211,211,211,255)',
        padding: theme.spacing(2, 0),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }

    

    
  }));


function Genevieve() {
    const { user } = useAuth();
    const classes = useStyles();

    return (
        <>
        <NavBar/>
        <Hero
            title=
            {
                user 
                ?   user === 'Genevieve Hasson'
                        ? 'You\'re my sun, moon and all my stars'
                        : 'Welcome to our story'
                :  'Our Magical story'
            }
            subTitle=
            { 
                user 
                ?   user === 'Genevieve Hasson'
                        ? `I love you, ${user}!`
                        : `Welcome back, ${user}`
                :   'Feel Free To Poke Around!'
            }
            actionText="Getting Started"
            actionUrl="/genevieve"
            snow={true}
        />
        <div className={classes.imgContainer}>
            <img className={classes.img} src={GandGImmage} alt='Genevieve and Bilal Banner'/>
        </div>
        {/* <Container className={classes.root}>
        </Container> */}
        {/* <Grid container justifyContent="center" spacing={2}>
            <Grid item>
                
            </Grid>
        </Grid> */}
        </>
    )
}

export default Genevieve
