import { makeStyles } from "@material-ui/core";
import HeroImage from '../../assets/mountain_1920x1280.jpg';
//https://source.unsplash.com/random/1600x500
export default makeStyles((theme) => ({
    root: {
      flex: '1 0 100%',
    },
    hero: {
      minHeight: '100vh',
      flex: '0 0 auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${HeroImage})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      color:
        theme.palette.type === 'light'
          ? theme.palette.primary.dark
          : theme.palette.primary.main,
    },
    text: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
    },
    title: {
      letterSpacing: '.7rem',
      textIndent: '.7rem',
      fontWeight: theme.typography.fontWeightLight,
      [theme.breakpoints.up('xs')]: {
        fontSize: 28,
      },
      [theme.breakpoints.up('md')]: {
        fontSize: 40,
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: 50,
      },
    },
    headline: { 
      //paddingLeft: theme.spacing(4),
      //paddingRight: theme.spacing(4),
      marginTop: theme.spacing(),
      letterSpacing: '.2rem',
      //maxWidth: 500,
      textAlign: 'center',
      color: 'rgba(160,160,160,0.5)',
      [theme.breakpoints.up('xs')]: {
        fontSize: 16,
      },
      [theme.breakpoints.up('md')]: {
        fontSize: 30,
      },

    },
    content: {
      paddingBottom: theme.spacing(8),
      paddingTop: theme.spacing(8),
      [theme.breakpoints.up('sm')]: {
        paddingTop: theme.spacing(12),
      },
    },
    buttonMargin: {
      marginTop: theme.spacing(3),
    }
  }))
  