import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    // Main Nav
    appBar: {
        //boxShadow: 'none',
        borderBottom: '1px solid rgba(0, 0, 0, 0.07)',
        //|   xs   |   sm   |   md   |   lg   |   xl
        [theme.breakpoints.up('xs')]: {
          padding: theme.spacing(0, 0),
        },
        [theme.breakpoints.up('sm')]: {
          padding: theme.spacing(0, 0),
        },
        [theme.breakpoints.up('md')]: {
          padding: theme.spacing(0, 20),
        },
        [theme.breakpoints.up('lg')]: {
          padding: theme.spacing(0, 30),
        },
        [theme.breakpoints.up('xl')]: {
          padding: theme.spacing(0, 50),
        },
    },
    logoText : {
      color: 'white',
      marginLeft: theme.spacing(2),
      fontWeight: 'normal'
    },
    mainNavAvatar : {
      marginLeft: theme.spacing(2),
      opacity: 0.8,
      height: theme.spacing(4),
      width: theme.spacing(4),
    },
    favicon : {
      width: theme.spacing(4),
      height: theme.spacing(4)
    },
})
)
