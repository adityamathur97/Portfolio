import React from 'react';
import './App.css';

import NavBar from './components/NavBar';
import About from './components/About';
import SkyLine from './components/SkyLine';

function App() {
	return (
		<div className="App">
			<NavBar />
			<div className="bodyContent">
				<About />
			</div>
			<SkyLine />
		</div>
	);
}

export default App;
