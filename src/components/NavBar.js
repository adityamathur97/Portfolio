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
		$('.myLinks').removeclassName('active');
		$(id).addclassName('active');
	}

	render() {
		return (
			<div className="myNavBar">
				<nav className="myNavbarNav navbar navbar-expand-lg navbar-light">
					<span id="myBrand" className="navbar-brand" href="#">
						Portfolio
					</span>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav myNavBarUl">
							<li id="myNavItemID" className="nav-item myNavItem">
								<a className="nav-link myNavLink" href="#aboutMe">
									About
								</a>
							</li>
							<li id="myNavItemID" className="nav-item myNavItem">
								<a className="nav-link myNavLink" href="#projectLink">
									Projects
								</a>
							</li>
							<li id="myNavItemID" className="nav-item myNavItem">
								<a
									className="nav-link myNavLink"
									href={require('../resume/Resume_Aditya_Mathur.pdf')}
									target="_blank"
								>
									Resume
								</a>
							</li>
							<li id="myNavItemID" className="nav-item myNavItem">
								<a className="nav-link myNavLink" href="#contactLink">
									Contact
								</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		);
	}
}

export default NavBar;
