import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Link, useLocation, useHistory } from "react-router-dom";

import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Button from "@material-ui/core/Button";
import Fade from '@material-ui/core/Fade';
import { useTheme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import useStyles from './styles';
import ReactTypingEffect from 'react-typing-effect';
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';

import { useAuth } from "../../Context/AuthContext";
import { useSite } from "../../Context/SiteContext";
import SwipeableTemporaryDrawer from "../SwipeableTemporaryDrawer/SwipeableTemporaryDrawer";

import SideNavOptions from './SideNavOptions/SideNavOptions'
import { useEffect, useState } from "react";


const topNavOptions = [
    {
        component:Link,
        to:`${process.env.PUBLIC_URL}/`,
        label:'Home'
    },
    {
        component:Link,
        to:`${process.env.PUBLIC_URL}/genevieve`,
        label:'Genevieve',
        // Permission to see the button in the side nav
        permissions_needed: 'genevieve' 
    }
]


const userGetsThePage = (link, permissions) => {
    // If no permissions are needed, return the link
    if (link.permissions_needed === undefined){
        return true;
    } else {
        // If permissions are needed
        // Does the users pemission match that of the one's needed?
        if (permissions.includes(link.permissions_needed)) {
            return true;
        }
    }
    return false;
}


const Header = () => {
    const { user, AvatarImage, permissions, signout } = useAuth();
    const classes = useStyles();

    // Set scroll nav colour - START
    const [scrollStyle, setScrollStyle] = useState({});

    useEffect(() => {
        window.addEventListener('scroll', listen);
        
        return () => {
            window.removeEventListener('scroll', listen)
        }
    }, [])

    const listen = () => {
        if (window.scrollY > 400) {
            setScrollStyle({
                transition: 'background-color 2s ease-in-out',
                backgroundColor: 'rgba(95,52,27,1)',
            });
        } else {
            setScrollStyle({
                transition: 'background-color 2s ease-in-out',
                backgroundColor: 'transparent',
            })
        }
    }
    // Set scroll nav colour - END





    // If there needs to be a condition for nav items to fade
    const fade = true;

    let history = useHistory();
    let location = useLocation(); 
    const handleSignOut = (e) => {
        e.preventDefault();
        let { from } = location.state || { from: { pathname: "/" } };
        signout(() => {
            history.replace(from);
        });
    }

    const site = useSite();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    return(
    <AppBar color='transparent' style={scrollStyle} position='fixed' className={classes.appBar}>
        <Toolbar>
            <Fade in={fade} timeout={1500}>
                <>
                <Avatar variant='circular' alt='favicon' src={site.favicon} className={classes.favicon}/>
                <Link to='/'>
                <Typography
                    component={ReactTypingEffect}
                    text={site.name}
                    typingDelay={1000}
                    variant='overline'
                    className={classes.logoText}
                />
                </Link>
                </>
            </Fade>
            <div style={{flex:1}} />
            {
                isMobile ? (
                    // If user defined, fill with user info
                    <Fade in={fade} timeout={1500}>
                        <div style={{display: 'flex'}}>
                            <SwipeableTemporaryDrawer position='right'>
                                {
                                    user 
                                    ? <Avatar variant='circular' alt={user} src={AvatarImage} className={classes.mainNavAvatar}/>
                                    : <MenuOutlinedIcon style={{color: 'white'}}/>
                                }
                                <SideNavOptions/>
                            </SwipeableTemporaryDrawer>
                        </div>
                    </Fade>
                ) : (
                <>
                <Fade in={fade} timeout={1500}>
                    <div style={{display: 'flex'}}>
                        {
                            topNavOptions.map(link => {
                                if(userGetsThePage(link, permissions)) {
                                    return <Button 
                                                key={`header_${link.label}`} 
                                                className={classes.logoText} 
                                                component={link.component} 
                                                to={link.to}
                                            >
                                                {link.label}
                                            </Button>;
                                }
                                return null;
                            })
                        }
                    
                        {
                            user
                            ? <Button className={classes.logoText} onClick={(e) => handleSignOut(e)}>Sign Out</Button>
                            : <Button className={classes.logoText} component={Link} to='/login'>Login</Button>
                        }
                        
                        {
                            user 
                            ?   <Avatar variant='circular' alt={user} src={AvatarImage} className={classes.mainNavAvatar}/>
                            :   null
                        }
                
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