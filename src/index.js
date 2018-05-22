import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux'
import Store from './store'
const StoreInstance = Store()

ReactDOM.render(
  <Router>
    <Provider store={StoreInstance}>
      <App />
    </Provider>
  </Router>, document.getElementById('root'));
registerServiceWorker();
