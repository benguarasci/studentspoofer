import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ReactGA from 'react-ga4';


import reportWebVitals from './reportWebVitals';


// ReactGA.initialize("G-ER292E16NF");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// const SendAnalytics = ()=> {
//   ReactGA.send({
//     hitType: "pageview",
//     page: window.location.pathname,
//   });
// }

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(SendAnalytics);
reportWebVitals();
