import React from 'react';

import '../css/About.css';
import $ from 'jquery';
import CircleImage from './CircleImage';

class About extends React.Component {
	constructor() {
		super();
		this.textTurn = false;
	}

	componentDidMount() {
		$('#changeText').fadeOut(0, function() {
			$('#changeText').fadeIn(3500, function() {
				$('#changeText').fadeOut(3500);
			});
		});
		var str = [ 'Aditya', 'Mathur', 'A Developer' ];
		var text;
		var i = 1;
		setInterval(function() {
			$('#changeText').fadeOut(3500, function() {
				$('#changeText').empty();

				text = str[i % str.length];
				i++;
				if (i == 3) {
					i = 0;
				}
				$('#changeText').append(text);
				$('#changeText').fadeIn(3500);

				// if (this.textTurn == true) {
				// 	text = 'Aditya';
				// } else {
				// 	text = 'A Developer';
				// }
				// $('#changeText').append(text);
				// $('#changeText').fadeIn(3500);
				// this.textTurn = !this.textTurn;
			});
		}, 7000);
	}

	render() {
		return (
			<div className="card mb-3 aboutCard shadow p-3 mb-5 bg-white rounded">
				<CircleImage />
				<div className="row no-gutters">
					<div className="col-md-7">
						<div className="card-body">
							<h1 className="card-title cardHeading">
								Hello Folks! I'm <span id="changeText">Aditya</span>
							</h1>
							<p className="card-text cardDesc">
								I'm a graduate student studying Master's in Computer Science at University of Texas at
								Dallas. Also I love Ramen and making applications.
							</p>
							<button type="button" class="btn btn-lg contButton  shadow-sm">
								Continue
							</button>
						</div>
					</div>
					<div className="col-md-5">
						<img
							src={require('../images/software_engineers.svg')}
							className="card-img aboutLogo"
							alt="..."
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default About;
