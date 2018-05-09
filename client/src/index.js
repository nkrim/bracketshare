import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Bracket from './bracket/Bracket';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<div>
		<App />
		<Bracket tiers={6}/>
	</div>
	, document.getElementById('root'));
registerServiceWorker();
