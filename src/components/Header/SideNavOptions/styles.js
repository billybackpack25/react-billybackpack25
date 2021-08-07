import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    // Side Nav
    //rootList : {
    //  width: '100%',
    //  maxWidth: 360,
    //  backgroundColor: theme.palette.background.paper,
    //  position: 'relative',
    //  overflow: 'auto',
    //  maxHeight: 300,
    //},
    navAvatar : {
      
      //marginLeft: theme.spacing(10),
      height: theme.spacing(6),
      width: theme.spacing(6),
    },
    navAvatarItem : {
      //justifyContent: 'center',
      //flex: 1

    },
    ul : {
      padding: 0,
    },
    listItemUsername : {
      fontWeight: "bold",
      marginLeft: theme.spacing(2)
    },
    listItemStats : {
      marginLeft: theme.spacing(2)
    },
    listIcon : {
      minWidth: theme.spacing(5)
    },
    pointer : {
      cursor: 'default'
    }, 
})
)
