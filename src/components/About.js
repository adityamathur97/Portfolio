import React from 'react';

import '../css/About.css';
import $ from 'jquery';

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
		setInterval(function() {
			var text;
			$('#changeText').fadeOut(3500, function() {
				$('#changeText').empty();
				if (this.textTurn == true) {
					text = 'Aditya';
				} else {
					text = 'A Developer';
				}
				$('#changeText').append(text);
				$('#changeText').fadeIn(3500);
				this.textTurn = !this.textTurn;
			});
		}, 7000);
	}

	render() {
		return (
			<div className="card mb-3 aboutCard">
				<div className="row no-gutters">
					<div className="col-md-7">
						<div className="card-body">
							<h1 className="card-title cardHeading">
								Hello Folks! I'M <span id="changeText">Aditya</span>
							</h1>
							<p className="card-text cardDesc">
								I'm a graduate student studying Master's in Computer Science at University of Texas at
								Dallas.
							</p>
							<button type="button" class="btn btn-primary btn-lg contButton">
								Continue
							</button>
							<p className="card-text">
								<small className="text-muted">Last updated 3 mins ago</small>
							</p>
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
