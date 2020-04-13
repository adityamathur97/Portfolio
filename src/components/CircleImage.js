import React from 'react';

import '../css/CircleImage.css';

class CircleImage extends React.Component {
	// constructor() {
	// 	super();
	// }

	render() {
		return (
			<div className="userImageDiv">
				<img className="userImage" src={require('../images/me.jpg')} alt="Aditya" />
			</div>
		);
	}
}

export default CircleImage;
