import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../components/HomePage/Home'


const App = () => {
  return (
    <Switch>
    <Route  path="/" component={HomePage} />
    </Switch>


  );
}

export default App;
