import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store1 from "./app/store";
import { Provider } from 'react-redux';
ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
       <Provider store={store1}>
            <App></App>
        </Provider>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
