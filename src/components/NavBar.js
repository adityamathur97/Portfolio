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
			<div className="myNavBar">
				<nav class="myNavbarNav navbar navbar-expand-lg navbar-light">
					<span id="myBrand" class="navbar-brand" href="#">
						Portfolio
					</span>
					<button
						class="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span class="navbar-toggler-icon" />
					</button>
					<div class="collapse navbar-collapse" id="navbarNav">
						<ul class="navbar-nav myNavBarUl">
							<li id="myNavItemID" class="nav-item myNavItem">
								<a class="nav-link myNavLink" href="#">
									About
								</a>
							</li>
							<li id="myNavItemID" class="nav-item myNavItem">
								<a class="nav-link myNavLink" href="#">
									Projects
								</a>
							</li>
							<li id="myNavItemID" class="nav-item myNavItem">
								<a class="nav-link myNavLink" href="#">
									Skills
								</a>
							</li>
							<li id="myNavItemID" class="nav-item myNavItem">
								<a class="nav-link myNavLink" href="#">
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
