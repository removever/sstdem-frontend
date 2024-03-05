import React from "react";
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import store from './store'

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
import "./assets/css/animate.min.css";
import "./assets/css/demo.css";
import "./assets/scss/light-bootstrap.scss";

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)