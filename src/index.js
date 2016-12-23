import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import data from './data/data'; // import data.js
import './index.css';

ReactDOM.render(
  <App data={data}/>, // passing data from data.js
  document.getElementById('root')
);
