import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './withUseStateHook/components/Home';

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);