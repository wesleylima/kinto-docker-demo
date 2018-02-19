import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
import KintoAdmin from "kinto-admin";

ReactDOM.render(<KintoAdmin />, document.getElementById('root'));
registerServiceWorker();
