import React from 'react';
import '../css/Contact.css';

class Contact extends React.Component {
	render() {
		return (
			<div id="contactLink" className="contactContainer shadow p-3 mb-5 bg-white rounded">
				<i className="fas fa-phone clipIcon" />
				<h1 className="projectHeading">Get in touch</h1>
				<div className="allMedia">
					<div className="mediaIconDiv">
						<a target="_blank" href="#">
							<i className="fas fa-envelope media" />
						</a>
					</div>
					<div className="mediaIconDiv">
						<a target="_blank" href="">
							<i className="fab fa-linkedin media" />
						</a>
					</div>
					<div className="mediaIconDiv">
						<a target="_blank" href="">
							<i className="fab fa-github-square media" />
						</a>
					</div>
					<div className="mediaIconDiv">
						<a target="_blank" href="">
							<i className="fab fa-facebook media" />
						</a>
					</div>
					<div className="mediaIconDiv">
						<a target="_blank" href="">
							<i className="fab fa-twitter-square media" />
						</a>
					</div>
				</div>
			</div>
		);
	}
}

export default Contact;
