import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Hello from "./components/hello";

const root = <Hello firstName="Alex" lastName="Cordani" />;

ReactDOM.render(root, document.getElementById('root'));
registerServiceWorker();
