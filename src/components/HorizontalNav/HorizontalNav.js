import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Link } from '@material-ui/core';
import SimpleDialogDemo from '../Modal/Modal';
import { useSite } from '../../Context/SiteContext';

// const baseFile = '/genevievehasson_myub4q3hna'
// function getMessages(year, month, data) {
//   const days = Object.keys(data[month]);
//   days.forEach(day => {
//       const file = `${baseFile}/${year}/${month}/${day}/messages.json`
//       console.log(file);
//       fetch(file
//       ,{
//         headers : { 
//           'Content-Type': 'application/json',
//           'Accept': 'application/json'
//         }
//       }
//       )
//         .then(function(response){
//           console.log(response)
//           return response.json();
//         })
//         .then(function(myJson) {
//           console.log(myJson);
//           //setData(prev => [myJson, ...prev])
//         });
//   })
// }


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '90vw',
    height:600,
    //width: 600,
    backgroundColor: theme.palette.background.paper,
  },
}));

const monthNAmes = {
  1:'Jan',
  2:'Feb',
  3:'Mar',
  4:'Apr',
  5:'May',
  6:'Jun',
  7:'Jul',
  8:'Aug',
  9:'Sep',
  10:'Oct',
  11:'Nov',
  12:'Dec',
}

export default function ScrollableTabsButtonAuto({data, year}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const {messages} = useSite();
  const [month, setMonth] = useState(Object.keys(data)[0]);
  const [messageDay, setMessageDay] = useState(Object.values(data[month])[0]);
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const returnMessages = () => {
    let allMessages;
    try {
      allMessages = messages[year][month][messageDay].reverse()
    } catch (err) {
      allMessages = ['']
    }
      return allMessages.map((item) => {
        const {sender_name, content, photos, timestamp_ms, ...everything} = item;
        return (
          <React.Fragment key={`${timestamp_ms}_${Math.random()}`}>
            <Typography key={`${timestamp_ms}_message`} variant='body2' color={photos && 'primary'}>Sender: {sender_name} - <strong>{content}</strong> {JSON.stringify(everything)}</Typography>
            {photos && <Link href={photos} target="_blank" color="primary" variant="body2">Link</Link>}
            {photos && <SimpleDialogDemo imageSrc={photos}/>}
          </React.Fragment> 
          )
      })
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          { // Display horizontal menu. Label is displayed for the user to click
            // onClick the state of month changes
            Object.keys(data).map((item, index) => {
              return (
                <Tab key={`link_${item}_month`} label={monthNAmes[item]} {...a11yProps(index)} onClick={() => {
                  if (item !== month){
                      // Set the month
                      setMonth(item)
                      // Set the new first day of the month
                      setMessageDay(Object.values(data[item]).reverse()[0]);
                  }
                }} />
              )
            })
          }
        </Tabs>
      </AppBar>
      {   // This is the data block on the right. Days and messages are shown 
          Object.keys(data).map((item,index) => {
            try {
            return (
                <TabPanel key={`horiz_content_${item}`} value={value} index={index}>
                    {                                       
                        Object.values(data[item]).reverse().map(day => (
                            <Link key={Math.random()} onClick={() => setMessageDay(day)}>{day} </Link>
                        ))
                    }
                    <br/>
                    {messages ? returnMessages() : 'loading...'}
                </TabPanel>
            )
            } catch (err) {
              return (
                <TabPanel key={`horiz_content_${Math.random()}`} value={''} index={Math.random()}>
                    no data
                </TabPanel>
              )
            }
          })
      }
    </div>
  );
}