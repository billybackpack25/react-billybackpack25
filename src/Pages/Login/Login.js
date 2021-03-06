import { useAuth } from "../../Context/AuthContext";
import { useLocation, useHistory, Link as RouteLink, Redirect } from "react-router-dom";

// export default function LoginPage() {
//     let history = useHistory();
//     let location = useLocation();
//     let auth = useAuth();
  
//     let { from } = location.state || { from: { pathname: "/" } };
//     let login = () => {
//       auth.signin(() => {
//         history.replace(from);
//       });
//     };
  
//     return (
//       <div style={{marginTop: 20}}>
//         <p>You must log in to view the page at {from.pathname}</p>
//         <button onClick={login}>Log in</button>
//       </div>
//     );
// } 

import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import HeroImage from '../../assets/mountain_1920x1280.jpg';

import { useSite } from "../../Context/SiteContext";

function Copyright(name) {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        BillyBackPack25
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(${HeroImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    height: theme.spacing(5),
    width: theme.spacing(5)
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function LoginPage() {
  const classes = useStyles();
  const site = useSite();
  let history = useHistory();
  let location = useLocation();
  let auth = useAuth();
  
  if(auth.user) return (
    <Redirect
      to={{
        pathname: "/",
        state: { from: location }
      }}
    />
  )

  let { from } = location.state || { from: { pathname: "/" } };
  let login = (e) => {
    e.preventDefault();
    auth.signin(() => {
      history.replace(from);
    });
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={5} md={7} className={classes.image} />
      <Grid item xs={12} sm={7} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar} src={`${process.env.PUBLIC_URL}${site.favicon}`}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate onSubmit={(e) => login(e)}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link component={RouteLink} to='/signup' variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright name={site.name}/>
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
