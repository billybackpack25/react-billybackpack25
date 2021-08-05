import { makeStyles } from "@material-ui/core";

const drawerWidth = 0;

export default makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    appBar: {
        boxShadow: 'none',
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
        [theme.breakpoints.up('sm')]: {
          width: `calc(100% - ${drawerWidth}px)`,
          marginLeft: drawerWidth,
        },
    },
    links: {
        textDecoration: 'none',
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    }
}))