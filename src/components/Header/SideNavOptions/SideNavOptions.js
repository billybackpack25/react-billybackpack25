import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PersonIcon from '@material-ui/icons/PersonOutlined';
import Avatar from '@material-ui/core/Avatar';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';

import { Link, useLocation, useHistory } from 'react-router-dom';

import useStyles from './styles';
import { useAuth } from "../../../Context/AuthContext";

const sideNavOptions = [
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

const SideNavOptions = () => {
    const { user, AvatarImage, displayName, poems, visits, permissions, signout } = useAuth();
    const classes = useStyles();
    let history = useHistory();
    let location = useLocation();  

    const handleSignOut = (e) => {
        e.preventDefault();
        let { from } = location.state || { from: { pathname: "/" } };
        signout(() => {
            history.replace(from);
        });
    }
    
    return (
        <>
        <List className={classes.rootList} subheader={<li />}>
            {
                !user
                ? (
                    <>
                    <List style={{height: 45}}> 
                        <ListItem button>
                            <ListItemText secondary={'BillyBackPack25'} />
                        </ListItem>
                    </List>
                    <Divider className={classes.divider}/>
                    </>
                ) : null
            }
            {   user ? (
                <>
                {/* Profile picture and username */}
                <li>
                    <ul className={classes.ul}>
                        <ListItem component={Link} to='/profile' className={classes.pointer}>
                            <ListItemIcon className={classes.navAvatarItem}>
                                <Avatar 
                                    variant='circular' 
                                    alt={user} 
                                    src={AvatarImage} 
                                    className={classes.navAvatar}
                                />
                            </ListItemIcon>
                        </ListItem>
                    </ul>
                    <ul className={classes.ul}>
                        <ListItemText className={classes.listItemUsername} disableTypography>
                            {displayName ? displayName : user}
                        </ListItemText>
                        <ListItemText className={classes.listItemStats} disableTypography>
                            <strong>{poems ? poems : 0}</strong> Poems <strong>{visits ? visits : 0}</strong> Visits
                        </ListItemText>
                    </ul>
                </li>
                <Divider className={classes.divider}/> 
                </>
                ) : (
                    <>
                        <ListItem button component={Link} to='/login'>
                            {/* <ListItemIcon className={classes.listIcon}>
                                <PersonIcon color='primary'/>
                            </ListItemIcon> */}
                            <ListItemText primary='Login' />
                        </ListItem>
                    </>
                )
            }
            {/* Page Links */}
            {
                sideNavOptions.map(link => {
                    

                    if (userGetsThePage(link, permissions)) {
                    return (
                        <ListItem key={`sideNav_${link.label}`} button component={link.component} to={link.to}>
                            <ListItemText primary={link.label} />
                        </ListItem>
                    )
                }
                return null;
            })
            }
            {/* Custom links */}
            {
                user
                ? (
                    <>
                    <Divider className={classes.divider}/>
                    <ListItem button>
                        <ListItemIcon className={classes.listIcon}>
                            <PersonIcon color='primary'/>
                        </ListItemIcon>
                        <ListItemText primary={'Profile'} />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon className={classes.listIcon}>
                            <SettingsOutlinedIcon color='primary'/>
                        </ListItemIcon>
                        <ListItemText primary={'Settings'} />
                    </ListItem>
                    <Divider className={classes.divider}/>
                    </>
                )
                : null
            }
        </List>
        
        {
            user 
            ? (
                <>
                <List> 
                    <ListItem button onClick={(e) => handleSignOut(e)}>
                        <ListItemText primary={'Sign Out'} />
                    </ListItem>
                </List>
                <Divider className={classes.divider}/>
                </>
            )
            : null
        }
        {
            user
            ? (
                <>
                <List> 
                    <ListItem button >
                        <ListItemText secondary={'BillyBackPack25'} />
                    </ListItem>
                </List>
                </>
            ) : null
        }
        </>
    )
}


export default SideNavOptions