import React from 'react';
import '../css/NavBar.css';
import $ from 'jquery';

class NavBar extends React.Component {
	constructor() {
		super();
		this.state = {
			firstLoad: true
		};
		this.changeActive = this.changeActive.bind(this);
	}

	changeActive(id) {
		$('.myLinks').removeClass('active');
		$(id).addClass('active');
	}

	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-light">
				<a className="navbar-brand hoverColor" href="#">
					<img id="logo" src={require('../images/code.svg')} alt="logo" /> Portfolio
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>

				<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div className="navbar-nav">
						<a
							id="about"
							className="nav-item nav-link myLinks hoverColor"
							onClick={this.changeActive('#about')}
							href="#aboutMe"
						>
							<i className="fas fa-smile hoverColor" /> About <span className="sr-only">(current)</span>
						</a>
						<a
							id="projects"
							className="nav-item nav-link  myLinks hoverColor"
							onClick={this.changeActive('#projects')}
							href="#projectLink"
						>
							<i className="fas fa-project-diagram hoverColor" /> Projects
						</a>
						<a
							id="resume"
							className="nav-item nav-link  myLinks hoverColor"
							onClick={this.changeActive('#resume')}
							href="#"
						>
							<i className="fas fa-file hoverColor" /> Resume
						</a>
						<a
							id="contact"
							className="nav-item nav-link  myLinks hoverColor"
							onClick={this.changeActive('#contact')}
							href="#"
						>
							<i className="fas fa-phone  hoverColor" /> Contact
						</a>
					</div>
				</div>
			</nav>
		);
	}
}

export default NavBar;
