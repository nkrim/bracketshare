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
		<div className="bracket-container" style={{position: 'relative'}}>
			<BracketSVG tiers={6}>
				<BracketEntry name="Black Paint" album_group={{name: "YOTS", bg_color: 'yellow', font_color: 'blue'}} x={0} y={-10}/>
				<BracketEntry name="Streaky" album_group={{name: "YOTS", bg_color: 'red', font_color: 'yellow'}} x={0} y={22}/>
				<BracketEntry name="Linda's In Custody" album_group={{name: "YOTS", bg_color: 'white', font_color: 'black'}} x={0} y={54}/>
				<BracketEntry name="Outro" album_group={{name: "YOTS", bg_color: 'black', font_color: 'orange'}} x={0} y={86}/>
			</BracketSVG>
		</div>
	</div>
	, document.getElementById('root'));
registerServiceWorker();
