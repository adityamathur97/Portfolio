import React from 'react';
import ProjectData from '../data/project.json';

import $ from 'jquery';
import '../css/Projects.css';

class Projects extends React.Component {
	componentDidMount() {
		$(ProjectData).each(function(key, value) {
			var eachProject =
				'<div class="projectDiv">' +
				'<a class="projectTitleLink" target="_blank" href=' +
				value.link +
				'><h2 class="projectTitle">' +
				value.heading +
				'</h2></a>' +
				'<p class="projectDate">' +
				value.time +
				'</p>' +
				'<p class="projectDesc">' +
				value.about +
				'</p>' +
				'</div>';
			$('#projectContent').append(eachProject);
		});
	}

	render() {
		return (
			<div id="projectLink" className="projectsContainer shadow p-3 mb-5 bg-white rounded">
				<i className="fas fa-project-diagram clipIcon" />
				<h1 class="projectHeading">Projects</h1>
				<div id="projectContent" />
			</div>
		);
	}
}

export default Projects;
