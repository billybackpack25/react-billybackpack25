import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    appBar: {
        boxShadow: 'none',
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    },
    links: {
        textDecoration: 'none',
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    }
}))