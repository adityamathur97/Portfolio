import React from 'react';
import $ from 'jquery';

import '../css/CircleImage.css';

class CircleImage extends React.Component {
	// constructor() {
	// 	super();
	// }

	componentDidMount() {
		let imgHeight = $('#aboutMe').height() / 8;
		$('#aboutMe').css('margin-bottom', -1 * imgHeight);
	}

	render() {
		return (
			<div id="aboutMe" className="userImageDiv">
				<img className="userImage" src={require('../images/me.jpg')} alt="Aditya" />
			</div>
		);
	}
}

export default CircleImage;
