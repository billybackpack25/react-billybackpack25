import React from 'react'
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Hero, NavBar } from '../../../components'
import MediaControlCard from '../../../components/AudioCard/AudioCard';

import { useAuth } from '../../../Context/AuthContext'; 
import { useSite } from '../../../Context/SiteContext';


const useStyles = makeStyles((theme) => ({
    sectionOne: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',
        paddingTop: theme.spacing(5),
        backgroundImage: ' url(/component/images/section_one.png)',
        backgroundColor: 'rgba(120, 120, 120, 0.9)',
        backgroundPosition: 'left bottom', /* Center the image */
        backgroundRepeat: 'repeat', /* Do not repeat the image */
        backgroundSize: '800px 750px',
    },
    header : {
        backgroundColor: 'rgba(180, 180, 180, 0.9)'
    }
}));

export default function Voice() {
    const classes = useStyles();
    const { user } = useAuth();
    const { audio_files } = useSite();

    return (
        <>
        
        <NavBar/>
        
        <Hero
            title="Audio Files"
            subTitle=
            { 
                user 
                ? `Welcome Back, ${user}!`
                : "Feel Free to Poke Around!"
            }
            actionText="Getting started"
            actionUrl="/"
            snow={true}
        />
        <section className={classes.sectionOne}>
            <Typography className={classes.header} variant="h2" gutterBottom>Audio Files</Typography>
            <MediaControlCard songList={audio_files}/>
        </section>
        </>
    )
}
