import CssBaseline from '@material-ui/core/CssBaseline';
import ProvideAuth from './Context/AuthContext';
import RouterApp from './Routing';

function App() {
  return (
    <ProvideAuth>
      <CssBaseline/>
      <RouterApp/>
    </ProvideAuth>
  );
}

export default App;
