import { makeStyles } from "@material-ui/core";
import HeroImage from '../../../assets/mountain_1920x1280.jpg';
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
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)), url(${HeroImage})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      position: 'relative',
    },
    text: {
      color: 'white',
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: theme.spacing(8),
      paddingTop: theme.spacing(8),
      [theme.breakpoints.up('sm')]: {
        paddingTop: theme.spacing(12),
      },
    },
  }))
  