import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
// import Paper from '@material-ui/core/Paper';
import bilalAvatar from '../../assets/bilal.png';
// import gigiAvatar from '../../assets/gigi.png';
//import clsx from 'clsx'

import './style.css';

// const useStyles = makeStyles((theme) => ({

//   }));

function MessageBox(props) {
    // const classes = useStyles();

    return (
        // <div className={classes.root}>
        //     <Avatar alt='Bilal Hasson' src={bilalAvatar}>B</Avatar>
        //     <Paper elevation={3}/>
        // </div>
        <>
        <div className="bubbleWrapper">
		<div className="inlineContainer">
			{/* <img className="inlineIcon" src="https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png"/> */}
			<Avatar className="avatar" alt='Bilal Hasson' src={bilalAvatar}>B</Avatar>
            <div className="otherBubble other">
            It’s not my first thoughts, appearance that is. However, I think you’re gorgeous and yes I’m physically attracted to you 🔥 
			</div>
		</div><span className="other">08:41</span>
	</div>
	<div className="bubbleWrapper">
		<div className="inlineContainer own">
            <Avatar className="avatar" alt='Bilal Hasson' src={bilalAvatar}>B</Avatar>
			<div className="ownBubble own">
			 The first rule of being a ninja is, 'Do no harm.'
			</div>
		</div><span className="own">08:55</span>
	</div>
	<div className="bubbleWrapper">
		<div className="inlineContainer">
            <Avatar className="avatar" alt='Bilal Hasson' src={bilalAvatar}>B</Avatar>
			<div className="otherBubble other">
				Knowing when to leave requires training.
			</div>
		</div>
	</div><span className="other">10:13</span>
	<div className="bubbleWrapper">
		<div className="inlineContainer own">
            <Avatar className="avatar" alt='Bilal Hasson' src={bilalAvatar}>B</Avatar>
			<div className="ownBubble own">
			Stunned but impressed. 
			</div>
		</div><span className="own">11:07</span>
	</div>
	<div className="bubbleWrapper">
		<div className="inlineContainer">
            <Avatar className="avatar" alt='Bilal Hasson' src={bilalAvatar}>B</Avatar>
			<div className="otherBubble other">
				How about throwing stars?
			</div>
		</div><span className="other">11:11</span>
	</div>
    </>
    )
}

export default MessageBox
