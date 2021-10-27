import React from 'react';
import { HashRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {

  const loading = (
    <div className="pt-3 text-center">
      <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
  )

  const Layout = React.lazy(() => import('./views/Layout'));

  return (

    <HashRouter basename='/'>
      <React.Suspense fallback={loading}>
        <Layout />
      </React.Suspense>
    </HashRouter>

  );
}

export default App;
