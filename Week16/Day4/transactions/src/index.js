import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import TransactionReducer from './reducers/TransactionReducer';
import { createStore } from 'redux';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';

if (localStorage.getItem('transactions') == null)
    localStorage.setItem('transactions', JSON.stringify([]))
    
let initialState = {
  currentIndex: -1,
  list: JSON.parse(localStorage.getItem('transactions'))
}

const store = createStore(TransactionReducer, initialState)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
