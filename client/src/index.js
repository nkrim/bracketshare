import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

import App from './App';
import BracketSVG from './bracket/BracketSVG';
import BracketEntry from './bracket/BracketEntry';

ReactDOM.render(
	<div>
		<App />
		<BracketSVG tiers={6}/>
		<BracketEntry name="Black Paint" album_group={{name: "YOTS", bg_color: 'green', font_color: 'yellow'}} x={100} y={100}/>
	</div>
	, document.getElementById('root'));
registerServiceWorker();
