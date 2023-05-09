import React from 'react';
import ReactDOM from 'react-dom';
/*import { createRoot } from 'react-dom/client';*/
import './index.css';
import App from './App';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import  store from './App/store'

ReactDOM.render(
  <Provider store={store}>
     <App/>
  </Provider>,
  document.getElementById("root")
);
