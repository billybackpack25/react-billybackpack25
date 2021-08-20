import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
//import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import HorizontalNav from '../HorizontalNav/HorizontalNav';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          {/* <Typography>{children}</Typography> */}
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
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 224,
    minWidth: '100%'
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function VerticalTabs({data}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        {
            Object.keys(data).map((item, index) => {
               //console.log('Creating vertical link button', item)
               return <Tab key={`leftNav_${index}`} label={item} {...a11yProps(index)} />;
            })
        }
      </Tabs>
        {
            Object.keys(data).map((item, index) => {
                //console.log('Creating vertical link content', item)
                //console.log('Passing months', Object.keys(data[item]))
                return (<TabPanel key={`data_${index}`} value={value} index={index}>
                    <HorizontalNav data={data[item]} year={item} />
                </TabPanel>)
            })
        }
    </div>
  );
}
