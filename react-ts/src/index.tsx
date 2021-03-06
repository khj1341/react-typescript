import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppStart from './AppStart';
import reportWebVitals from './reportWebVitals';
import { compose, createStore } from 'redux';
import rootReducer from './modules';
import { Provider } from 'react-redux';

// chrome redux devtools 사용
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: typeof compose;
  }
}

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(rootReducer, devTools);

ReactDOM.render(
  <Provider store={store}>
    <AppStart />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
