import React from 'react';
//import { Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Hero, NavBar } from '../../components';

import Grid from '@material-ui/core/Grid';

import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import BrushOutlinedIcon from '@material-ui/icons/BrushOutlined';
import EcoOutlinedIcon from '@material-ui/icons/EcoOutlined';
import FingerprintOutlinedIcon from '@material-ui/icons/FingerprintOutlined';
import InsertEmoticonOutlinedIcon from '@material-ui/icons/InsertEmoticonOutlined';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { useAuth } from '../../Context/AuthContext'; 


const useStyles = makeStyles((theme) => ({
    offsetContainer : {
        position: 'relative',
        width:'90%',
        height: '100%',
        backgroundColor:'rgba(241,242,247,255)',
        zIndex: 1,
        top: -50,
        margin: '0  auto',
        padding: '50px 20px 50px 20px',
    },
    largeHeader : {
        color: 'rgba(95,52,27,255)',
        [theme.breakpoints.up('lg')]: {
            marginLeft: '9%',
        }
    },
    // cards
    cards: {
        width:'100%',
        //backgroundColor: 'rgba(241,242,247,0)',
        backgroundColor: 'transparent',
        boxShadow: 'none',
        '& h2' : {
            color: 'rgba(95,52,27,255)',
        },
        '& svg' : {
            width: theme.spacing(7),
            height: theme.spacing(7),
            color: 'rgba(95,52,27,0.5)',
            margin: theme.spacing(0,0,0,1)
        },
        '& p' : {
            //color: 'rgba(95,52,27,0.7)',
        }
    },
  })
);

const cards = [
    {
        icon: <AccountCircleOutlinedIcon/>,
        heading: 'Insta IM\'s',
        body: 'Take a look 👀 at our past converstion 💬 on Instagram, relive the highlights, and remember your love journey 💕 ',
        link: 'instagram',
    },
    {
        icon: <BrushOutlinedIcon/>,
        heading: 'Gallery',
        body: "Don't want to scroll 📜 through the conversation to find photo's 📷, I don't blame you. All our photo's in one place 😇",
        link: 'gallery',
    },
    {
        icon: <EcoOutlinedIcon/>,
        heading: 'Recordings',
        body: 'Miss my voice 📱? Get your very own husband voice recordings 🎤 right here! 😍',
        link: 'voice',
    },
    {
        icon: <FingerprintOutlinedIcon/>,
        heading: 'Poems',
        body: 'Journey through your hearts 💝 desires, where art thou Genevieve, my beloved, cometh here and witness our written devotion 💌',
        link: 'poems',
    },
    {
        icon: <InsertEmoticonOutlinedIcon/>,
        heading: 'Movies',
        body: 'Did someone 🙇 say movie date 💚 night? 🎥',
        link: 'movies',
    },
]

function Genevieve(props) {
    const { user } = useAuth();
    const classes = useStyles();
    const {match, history, location} = props;

    return (
        <>
        <NavBar/>
        <div style={{
            position: 'relative',
            display:'flex',
            flexDirection:'column',
            justifyContent:"center",

        }}>
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
            <div className={classes.offsetContainer}>
            <Typography variant="h1" className={classes.largeHeader} children='I love you my darling wife' gutterBottom/>
            <Grid 
                container 
                spacing={3}
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
            {
                cards.map(card => (
                    <Grid key={`${card.heading}_card`} item xs={12} sm={6} md={3} lg={2}>
                        <Card className={classes.cards} onClick={() => history.push(`${match.url}/${card.link}`, [location.state])}>
                            <CardActionArea>
                                {card.icon}
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2" children={card.heading}/>
                                    <Typography variant="body2" color="textSecondary" component="p" children={card.body}/>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))
            }
        </Grid>
            </div>
        </div>
        </>
    )
}

export default Genevieve
