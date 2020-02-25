import React from 'react';
import configStore from './store';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import ROUTES from './utils/routes';

import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';

const store  = configStore();

function Routes() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path={ROUTES.home} component={Home} />
        </Switch>
      </Router>
    </Provider>
  );
  
}

export default Routes;
