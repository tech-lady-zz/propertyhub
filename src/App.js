import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Pages/Home'
// import logo from './logo.svg';
// import './App.css';


const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  );
};

export default App;
