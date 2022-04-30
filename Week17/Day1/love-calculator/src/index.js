import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './App';
import {reducer} from './redux/reducer';
import {reducer1} from './redux/reducer';
import {reducer2} from './redux/reducer';
import { combineReducers } from 'redux';

const store = createStore(rootReducer, );

const rootReducer = combineReducers({reducer:reducer, reducer1:reducer1, reducer2:reducer2})

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);

// ReactDOM.render(
//   <React.StrictMode>
//       <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
