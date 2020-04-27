import React from 'react';
import '../css/Contact.css';

class Contact extends React.Component {
	render() {
		return (
			<div id="contactLink">
				<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />

				<div className="content contentContact">
					<div
						onClick={() => window.open('mailto:adityamathur97@gmail.com', '_blank')}
						className="card cardContact"
					>
						<div className="icon">
							<i style={{ fontSize: '2.5em' }} class="fas fa-envelope" />
						</div>
						<p className="title titleContact">Mail</p>
						<p style={{ fontWeight: '400' }} className="text textContact">
							Send me your query!
						</p>
					</div>
					<div
						onClick={() => window.open('https://www.linkedin.com/in/adityamathur97/', '_blank')}
						className="card cardContact"
					>
						<div className="icon linkedin">
							<i className="linkedin" style={{ fontSize: '2.5em' }} class="fab fa-linkedin-in" />
						</div>
						<p className="title titleContact">Linked In</p>
						<p style={{ fontWeight: '400' }} className="text textContact">
							Connect with me on LinkedIn.
						</p>
					</div>

					<div
						onClick={() => window.open('https://github.com/adityamathur97', '_blank')}
						className="card cardContact"
					>
						<div className="icon github">
							<i style={{ fontSize: '2.5em' }} class="fab fa-github" />
						</div>
						<p className="title titleContact">Github</p>
						<p style={{ fontWeight: '400' }} className="text textContact">
							Take a look at my projects.
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Contact;
