import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import Store from './store'
const StoreInstance = Store()

ReactDOM.render(
  <HashRouter>
    <Provider store={StoreInstance}>
        <App />
    </Provider>
  </HashRouter>, document.getElementById('root'));
