import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Item } from './stores/Item';
import { Inventory } from './stores/Inventory';
import { Provider } from 'mobx-react';

const shop = new Inventory();

// ReactDOM.render(
//   <React.StrictMode>
//     <App store = {shop}/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const stores = {
  shop
}

ReactDOM.render(
  <Provider {...stores}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
