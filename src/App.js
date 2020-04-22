import React from 'react';
import './App.css';

import NavBar from './components/NavBar';
import About from './components/About';
import SkyLine from './components/SkyLine';
import Projects from './components/Projects';
import Contact from './components/Contact';
import CircleImage from './components/CircleImage.js';

function App() {
	return (
		<div className="App">
			<div className="bodyContent">
				<NavBar />
				<CircleImage />
				<About />
				<Projects />
				<Contact />
				<SkyLine />
			</div>
		</div>
	);
}

export default App;
