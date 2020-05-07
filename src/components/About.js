import React from 'react';
import aboutData from '../data/about.json';

import '../css/About.css';
import $ from 'jquery';

class About extends React.Component {
	componentDidMount() {
		// 	let calMargin = $('#aboutMe').height() / 2;
		// 	console.log(calMargin);

		this.loadAbout();

		$('#changeText').fadeOut(0, function() {
			$('#changeText').fadeIn(3500, function() {
				$('#changeText').fadeOut(3500);
			});
		});
		var str = [ 'Aditya Mathur', 'A Developer' ];
		var text;
		var i = 1;
		setInterval(function() {
			$('#changeText').fadeOut(3500, function() {
				$('#changeText').empty();

				text = str[i % str.length];
				i++;
				if (i === str.length) {
					i = 0;
				}
				$('#changeText').append(text);
				$('#changeText').fadeIn(3500);
			});
		}, 7000);
	}

	loadAbout = () => {
		$(aboutData).each(function() {
			$('.cardDesc').append(this.text);
		});
	};

	render() {
		return (
			<div className="card mb-3 aboutCard shadow p-3 mb-5 bg-white rounded">
				<div className="row no-gutters">
					<div className="col-md-7 textDiv">
						<div className="card-body blah">
							<h1 className="card-title cardHeading">
								Hello Folks! I'm <span id="changeText">Aditya Mathur</span>
							</h1>
							<p className="card-text cardDesc" />
							<a
								className="btn btn-lg contButton shadow-sm"
								href={require('../resume/Resume_Aditya_Mathur.pdf')}
							>
								Resume <i className="fas fa-file-download" />
							</a>
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
