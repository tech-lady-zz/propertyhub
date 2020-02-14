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
import configureStore from './redux/configureStore';
import { Provider } from 'react-redux';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      {' '}
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
