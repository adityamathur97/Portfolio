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
					<div className="col-md-6">
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								This is a wider card with supporting text below as a natural lead-in to additional
								content. This content is a little bit longer.
							</p>
							<p className="card-text">
								<small className="text-muted">Last updated 3 mins ago</small>
							</p>
						</div>
					</div>
					<div className="col-md-6">
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
