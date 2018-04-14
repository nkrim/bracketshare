import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Bracket from './bracket/Bracket';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<div>
		<App />
		<Bracket />
	</div>
	, document.getElementById('root'));
registerServiceWorker();
