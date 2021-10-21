import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import '@coreui/coreui/dist/css/coreui.min.css';
import './App.css';

function App() {

  const loading = (
    <div className="pt-3 text-center">
      <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
  )

  // Containers
  const TheLayout = React.lazy(() => import('./components/coreUi/containers/TheLayout'));

  // Pages
  const Login = React.lazy(() => import('./components/coreUi/views/pages/login/Login'));
  const Register = React.lazy(() => import('./components/coreUi/views/pages/register/Register'));
  const Page404 = React.lazy(() => import('./components/coreUi/views/pages/page404/Page404'));
  const Page500 = React.lazy(() => import('./components/coreUi/views/pages/page500/Page500'));

  return (
    <HashRouter basename='/'>
      <React.Suspense fallback={loading}>
        <Switch>
          <Route exact path="/login" name="Login Page" render={props => <Login {...props} />} />
          <Route exact path="/register" name="Register Page" render={props => <Register {...props} />} />
          <Route exact path="/404" name="Page 404" render={props => <Page404 {...props} />} />
          <Route exact path="/500" name="Page 500" render={props => <Page500 {...props} />} />
          <Route path="/" name="Home" render={props => <TheLayout {...props} />} />
        </Switch>
      </React.Suspense>
    </HashRouter>
  );
}

export default App;
