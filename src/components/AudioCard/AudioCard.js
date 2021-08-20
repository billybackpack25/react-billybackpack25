import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ReactAudioPlayer from 'react-audio-player';
import { Button, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      height: 600,
      justifyContent: 'space-around',
      overflow: 'hidden',
      //backgroundColor: theme.palette.background.paper,
      '& > -webkit-scrollbar' : {
          display:'none'
      }
    },
    paper: {
        maxHeight: 500, 
        overflow: 'auto',
        '&::-webkit-scrollbar': {
            display: 'none',
        },
        '-ms-overflow-style': 'none',  /* IE and Edge */
        'scrollbarWidth': 'none',  /* Firefox */
        backgroundColor: 'rgba(120, 120, 120, 0.9)',
        padding: theme.spacing(0, 2)
    }
}));

function getDayMonthYear(timestamp_ms) {
    // console.log(d.toISOString()) // 2021-08-08T13:36:14.650Z // ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()
    // console.log(d.toString()) // Sun Aug 08 2021 14:36:14 GMT+0100 (British Summer Time)
    const d = new Date(timestamp_ms)
    return d.toDateString()
    // return {
    //     y: d.getFullYear(),
    //     m: (d.getMonth() + 1),
    //     d: d.getDate()
    // }
}

export default function MediaControlCard({songList}) {
  const classes = useStyles();
  const [paginate, setPaginate] = useState({
      start: 0,
      end:10
    });

  const nextPaginate = () => {
    setPaginate(prev => ({
        start: (prev.start + 10),
        end: prev.end + 10
        })
    )
  }

  const previousPaginate = () => {
    setPaginate(prev => ({
        start: (prev.start - 10),
        end: prev.end - 10
        })
    )
  }

  const PaginationControls = () => (
      <>
    { songList && <Button onClick={() => previousPaginate()} disabled={!(paginate.start >= 10)}>Previous</Button>}
    { songList && <Button onClick={() => nextPaginate()} disabled={paginate.end >= songList.length}>Next</Button>}
    { songList &&  <Typography variant='body2' color={'secondary'}>{paginate.start} - {paginate.end} ({songList.length})</Typography>}
    </>
  )


  return (
    <div className={classes.root}>
        <Paper className={classes.paper}>
            <List>
                <ListItem>
                    <PaginationControls/>
                </ListItem>
            </List> 
            <List>
                {
                    songList && songList.reverse().slice(paginate.start, paginate.end).map(song => (
                        <React.Fragment key={song.audio_files}>
                        <Typography variant="subtitle2">{song.sender_name}</Typography>
                        <Typography variant="body2">{getDayMonthYear(song.timestamp_ms)}</Typography>
                        <ReactAudioPlayer
                        src={song.audio_files}
                        controls
                        />
                        </React.Fragment>
                    ))
                }
            </List>
            <List>
                <ListItem>
                    <PaginationControls/>
                </ListItem>
            </List>
        </Paper>
    </div>
  );
}