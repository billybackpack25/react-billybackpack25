import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useLocation,
} from "react-router-dom";

import { LoginPage, 
  HomePage, 
  // AboutPage, 
  // UserPage, 
  // BlockingFormPage, 
  NoMatchPage, 
  Genevieve, 
  Profile,
  AccessDenied, 
  SignUp
} from "./Pages";

import { useAuth } from '../src/Context/AuthContext';


export default function RouterApp() {
  return (
        <Router>
            <Switch>
                {/* Protected Pages */}
                <PrivateRoute path="/profile" component={Profile} exact/>
                {/* <PrivateRoute path="/about" component={AboutPage} exact/>
                <PrivateRoute path="/users" component={UserPage} exact/>
                <PrivateRoute path="/form" component={BlockingFormPage} exact/> */}
                <PrivateRoute 
                  path="/genevieve" 
                  component={Genevieve} 
                  permission_name='Genevieve' 
                  permissions_needed='genevieve' 
                  exact
                />
                {/* Non-Protected Pages */}
                <Route path="/access-denied" component={AccessDenied} exact/>
                <Route path="/login" component={LoginPage} exact/>
                <Route path="/signup" component={SignUp} exact/>
                <Route path="/" component={HomePage} exact/>
                <Route path="*" component={NoMatchPage} exact/>
            </Switch>
        </Router>
  );
}

/* Redirects Router - START */

function PrivateRoute(route) {
    let auth = useAuth();
    let location = useLocation();

    if(!auth.user) return (
      <Redirect
        to={{
          pathname: "/login",
          state: { from: location }
        }}
      />
    )
    
    if (route.permissions_needed && !auth.permissions.includes(route.permissions_needed)) {
      return (
      <Redirect
        to={{
          pathname: "/access-denied",
          state: { from: location },
          search: `?reason=does not have permission&permission_needed=${route.permissions_needed}&page=${route.permission_name}`,
        }}
      />
      )
    }

    return (
      <Route {...route} />
    )
}

/* Redirects Router - END */

/* Useful Tips
 *
 * <Link to="/">Home</Link>
 * <Redirect to="/login" />
 * 
 */

/* URL PARAMS
 * <Route path="/:id" children={<Child />} />
 * function Child() {
 *       // We can use the `useParams` hook here to access
 *       // the dynamic pieces of the URL.
 *       let { id } = useParams();
 *
 *       return (
 *           <div>
 *           <h3>ID: {id}</h3>
 *           </div>
 *       );
 *   }
 */