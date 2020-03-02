import React from 'react';
import ReactDOM from 'react-dom';

// import './index.css';
import './fonts/icomoon/style.css';
import './css/bootstrap.min.css';
import './css/magnific-popup.css';
import './css/jquery-ui.css';
import './css/owl.carousel.min.css';
import './css/owl.theme.default.min.css';
import './css/bootstrap-datepicker.css';
import './css/mediaelementplayer.css';
import './css/animate.css';
import './fonts/flaticon/font/flaticon.css';
import './css/fl-bigmug-line.css';
import './css/aos.css';
import './css/style.css';

import { BrowserRouter } from 'react-router-dom';
import App from './App';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
