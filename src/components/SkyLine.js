import React from 'react';

import '../css/SkyLine.css';

class SkyLine extends React.Component {
	// constructor() {
	// 	super();
	// }

	render() {
		return (
			<div className="skyLineDiv">
				<p className="foot">
					<span>Build with </span>
					<img src={require('../images/favicon.ico')} alt="React Logo" />
				</p>
			</div>
		);
	}
}

export default SkyLine;
