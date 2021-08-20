import React from 'react';
import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
// import { blue } from '@material-ui/core/colors';
// import Avatar from '@material-ui/core/Avatar';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemAvatar from '@material-ui/core/ListItemAvatar';
// import ListItemText from '@material-ui/core/ListItemText';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import PersonIcon from '@material-ui/icons/Person';
// import AddIcon from '@material-ui/icons/Add';
// import Typography from '@material-ui/core/Typography';

//const emails = ['username@gmail.com', 'user02@gmail.com'];
// const useStyles = makeStyles({
//   avatar: {
//     backgroundColor: blue[100],
//     color: blue[600],
//   },
// });

function SimpleDialog(props) {
  //const classes = useStyles();
  const { onClose, imageSrc, open } = props;

  const handleClose = () => {
    onClose(imageSrc);
  };

  // const handleListItemClick = (value) => {
  //   onClose(value);
  // };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      {/* <DialogTitle id="simple-dialog-title">Close</DialogTitle> */}
      <img src={imageSrc} alt={imageSrc} />
      {/* <List>
        {emails.map((email) => (
          <ListItem button onClick={() => handleListItemClick(email)} key={email}>
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={email} />
          </ListItem>
        ))}

        <ListItem autoFocus button onClick={() => handleListItemClick('addAccount')}>
          <ListItemAvatar>
            <Avatar>
              <AddIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Add account" />
        </ListItem>
      </List> */}
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  imageSrc: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo({imageSrc}) {
  const [open, setOpen] = React.useState(false);
  //const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    //setSelectedValue(value);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open simple dialog
      </Button>
      {/* <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} /> */}
      <SimpleDialog imageSrc={imageSrc} open={open} onClose={handleClose} />
    </div>
  );
}
