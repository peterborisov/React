import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//1. Import from react-redux and redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/index';

//4. Create redux store
const store = createStore(rootReducer, composeWithDevTools())

//5. provide redux store to the entire app
//Wrap App in Provider and provide store
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);