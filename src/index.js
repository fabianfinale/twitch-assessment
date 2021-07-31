import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import 'bootstrap/dist/js/bootstrap.bundle';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faAt,
  faCheck,
  faBroadcastTower,
  faLanguage,
  faSearch,
  faGamepad,
  faStopwatch,
  faSignOutAlt,
  faCommentDots,
} from '@fortawesome/free-solid-svg-icons';
import configureStore from './store/configureStore';
import { faTwitch } from '@fortawesome/free-brands-svg-icons';

library.add(
  faAt,
  faCheck,
  faSearch,
  faBroadcastTower,
  faLanguage,
  faGamepad,
  faStopwatch,
  faSignOutAlt,
  faCommentDots,
  faTwitch
);
const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
