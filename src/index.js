import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import HelloWorld from './state-drills/HelloWorld';
import Bomb from './state-drills/Bomb';
import RouletteGun from './state-drills/RouletteGun';

ReactDOM.render(
	<Fragment>
		<Bomb />
		<HelloWorld />
		<RouletteGun />
	</Fragment>,
	document.getElementById('root')
);
