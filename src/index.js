import React from 'react';
import ReactDOM from 'react-dom';
import './assets/fonts/icomoon/style.css';
import './assets/css/bootstrap.min.css';
import './assets/css/magnific-popup.css';
import './assets/css/jquery-ui.css';
import './assets/css/owl.carousel.min.css';
import './assets/css/owl.theme.default.min.css';
import './assets/css/bootstrap-datepicker.css';
import './assets/css/mediaelementplayer.css';
import './assets/css/animate.css';
import './assets/fonts/flaticon/font/flaticon.css';
import './assets/css/fl-bigmug-line.css';
import './assets/css/aos.css';
import './assets/css/style.css';

import App from './components/App';
import { BrowserRouter } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    {' '}
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
