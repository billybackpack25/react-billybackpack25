import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useLocation,
} from "react-router-dom";

import { LoginPage, HomePage, AboutPage, UserPage, BlockingFormPage, NoMatchPage, Genevieve } from "./Pages";

import { NavBar } from './components';
import { useAuth } from '../src/Context/AuthContext';

export default function RouterApp() {
  return (
        <Router>
            <NavBar />
            <Switch>
                {/* Protected Pages */}
                <PrivateRoute path="/about" component={AboutPage} exact/>
                <PrivateRoute path="/users" component={UserPage} exact/>
                <PrivateRoute path="/form" component={BlockingFormPage} exact/>
                {/* Non-Protected Pages */}
                <Route path="/login" component={LoginPage} exact/>
                <Route path="/genevieve" component={Genevieve} exact/>
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