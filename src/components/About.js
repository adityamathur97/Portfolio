import React from 'react';

import '../css/About.css';
import $ from 'jquery';

class About extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="card mb-3 aboutCard">
				<div className="row no-gutters">
					<div className="col-md-7">
						<div className="card-body">
							<h1 className="card-title cardHeading">Hello Folks! I'M A Developer</h1>
							<p className="card-text cardDesc">
								I'm a graduate student studying Master's in Computer Science at University of Texas at
								Dallas.
							</p>
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
