import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {App}  from "./App";
import { Provider } from "react-redux";
import { store } from "./_helpers";
import './assets/css/style.css';
import './assets/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import reportWebVitals from "./reportWebVitals";
import serviceworker from './serviceworker';
import { history } from "./_helpers";
import {Router} from 'react-router-dom';

const ProviderComponent = ()=>{
  return (
  <Provider store={store}>
   <Router history={history} >
   <App/>
  </Router>
    </Provider>
  )
}
ReactDOM.render(
  <React.StrictMode>
  <ProviderComponent/>
  </React.StrictMode>,
  document.getElementById('root')
);
serviceworker();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

