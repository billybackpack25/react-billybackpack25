import CssBaseline from '@material-ui/core/CssBaseline';
import ProvideAuth from './Context/AuthContext';
import ProvideSite from './Context/SiteContext';
import RouterApp from './Routing';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: 'center',
    direction: 'column',
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
  }
}));

function App() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline/>
      <ProvideAuth>
        <ProvideSite>
          <div className={classes.root}>
            <RouterApp/>
          </div>
        </ProvideSite>
      </ProvideAuth>
    </>
  );
}

export default App;
