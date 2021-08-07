import React, {useState, Fragment} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/core/IconButton';

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles({
  list: {
    width: 250,
    //backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3))',
    backgroundColor: 'rgb(211,211,211)',
    opacity: 0.8,
    height: '100%'
  },
});

// The following properties are used in this documentation website for optimal usability of the component:
// - iOS is hosted on high-end devices. The backdrop transition can be enabled without dropping frames. The performance will be good enough.
// - iOS has a "swipe to go back" feature that interferes with the discovery feature, so discovery has to be disabled.

const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

export default function SwipeableTemporaryDrawer({position, children}) {
    const classes = useStyles();
    const [state, setState] = useState({
        left: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
    if (event 
            && event.type === 'keydown' 
            && (event.key === 'Tab' || event.key === 'Shift')
        ) {return;}
    setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
    <div
        className={clsx(classes.list)}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
    >
        {
            // This should be a single React Fragment 
            // with a list of items to display in the side nav
            children[1]
        }
    </div>
    );

    return (
        <div>
            {[position].map((anchor) => (
            <Fragment key={anchor}>
                <IconButton onClick={toggleDrawer(anchor, true)}>{children[0]}</IconButton>
                <SwipeableDrawer
                    transitionDuration={{enter:1000,exit:1500}}
                    disableBackdropTransition={!iOS} 
                    disableSwipeToOpen={iOS}
                    disableDiscovery={iOS}
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                    onOpen={toggleDrawer(anchor, true)}
                >
                {list(anchor)}
                </SwipeableDrawer>
            </Fragment>
            ))}
        </div>
    );
}

SwipeableTemporaryDrawer.defaultProps = {
    position: 'right',
    children: [<Avatar variant='circular' alt='user'/>,
    <>
        <List>
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

],
}

SwipeableTemporaryDrawer.propTypes = {
    position: PropTypes.string,
    children: PropTypes.array.isRequired
};

