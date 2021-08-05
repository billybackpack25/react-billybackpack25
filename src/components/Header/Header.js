import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
//import HouseRoundedIcon from '@material-ui/icons/HouseRounded';

import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Button from "@material-ui/core/Button";
import Fade from '@material-ui/core/Fade';
import { useTheme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import useStyles from './styles';
import ReactTypingEffect from 'react-typing-effect';

import { useAuth } from "../../Context/AuthContext";
import SwipeableTemporaryDrawer from "../SwipeableTemporaryDrawer/SwipeableTemporaryDrawer";

const Items = () => {
    const { user, AvatarImage } = useAuth()
    const classes = useStyles();
    return (
        <>
        <List subheader={<ListSubheader>{user}</ListSubheader>}>
            <ListItem button>
                <ListItemIcon className={classes.navAvatarItem}>
                    {/* <HouseRoundedIcon color='primary' /> */}
                    <Avatar variant='circular' alt={user} src={AvatarImage} className={classes.navAvatar}/>
                </ListItemIcon>
                
                {/* <ListItemText primary='Home' /> */}
            </ListItem>

            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
                </ListItem>
            ))}
        </List>
        <Divider />
        <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
                <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
                </ListItem>
            ))}
        </List>
        </>
    )
}

const Header = () => {
    const { user, AvatarImage } = useAuth()
    const classes = useStyles();

    const [fade, setFade] = useState(false);

    useEffect(() => {
        setFade(true);
    }, [])

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    return(
    <AppBar color='transparent' position='fixed' className={classes.appBar}>
        <Toolbar>
            <Fade in={fade} timeout={1000}>
                <Link to='/'>
                <Typography
                    component={ReactTypingEffect}
                    text={'BillyBackPack25'}
                    typingDelay={1000}
                    variant='overline'
                    className={classes.logoText}
                />
                </Link>
            </Fade>
            <div style={{flex:1}} />
            {
                isMobile ? (
                    user 
                    ? (
                        // If user defined, fill with user info
                        <SwipeableTemporaryDrawer>
                            <Avatar variant='circular' alt={user} src={AvatarImage} className={classes.avatar}/>
                            <Items />
                        </SwipeableTemporaryDrawer>
                    ) : (
                        // If the user is not defined, use the scroll default
                        <SwipeableTemporaryDrawer/>
                    )

                    
                ) : (
                <>
                <Fade in={fade} timeout={1500}>
                    <div style={{display: 'flex'}}>
                    <Button className={classes.logoText} component={Link} to={process.env.PUBLIC_URL + "/"}>Home</Button>
                    <Button className={classes.logoText} component={Link} to={process.env.PUBLIC_URL + "/genevieve"}>Genevieve</Button>
                    </div>
                </Fade>
                </>
                )
            }
        </Toolbar>
    </AppBar>
    )
}
export default Header