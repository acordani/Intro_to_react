import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Hello from "./components/hello";

const root = 
	<div>
		<Hello firstName="Alex" lastName="Cordani" />
		<Hello firstName="Alex" lastName="Cordani" />
	</div>

ReactDOM.render(root, document.getElementById('root'));
registerServiceWorker();
