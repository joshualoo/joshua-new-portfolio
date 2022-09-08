import React from 'react'
import ProjectsNavbar from '../ProjectsNavbar/ProjectsNavbar'
import rezgoLogo from "../../images/portfolio/rezgo-frontend/rezgo-logo.png";

import plugin_1 from "../../images/portfolio/rezgo-plugin/plugin_1.jpg";
import plugin_2 from "../../images/portfolio/rezgo-plugin/plugin_2.jpg";

const rezgoPlugin = () => {
	return (
		<div>
			<section className="section">
				<div className="container">
					<div className="columns is-vcentered logo-text-columns single-work-column">
						<div className="column">
							<h3 className="title portfolio-title is-size-1">Rezgo Wordpress Plugin</h3>
						</div>
						<div className="column image-column">
							<img
								src={rezgoLogo}
								alt="Rezgo Logo"
								className="image"
							/>
						</div>
					</div>

					<div className="columns single-work-column">
						<div className="column is-four-fifths">
							<h2 className="section__title is-size-3">a brief description</h2>
							<p>
								The Rezgo Booking System in a Wordpress plugin format. 
								<br />
								<br />
								Since there are some differences between how Wordpress handles and load data, the plugin is maintained as a separate codebase in the Wordpress' plugin SVN(subversion) <a href="https://wordpress.org/plugins/rezgo/#developers" target="_blank" className="link">repository</a>. 
								<br />
								<br />
								There isn't much difference from the regular white label version but most users prefer to customize the plugin to more closely align with the branding on their websites.
								<br />
								<br />
								The plugin allows them to do just that and maintain a seamless booking experience on the same URL. 
								
							</p>
						</div>
						<div className="column"></div>
					</div>
					<hr />

					<div className="columns portfolio-img__columns">
						<div className="column is-three-fifths">
							<img src={plugin_1} className="img-box-shadow" alt="Plugin Site 1" />
						</div>
						<div className="column is-two-fifths">
							<img src={plugin_2} className="img-box-shadow" alt="Plugin Site 2" />
						</div>
					</div>


				</div>
			</section>

			<ProjectsNavbar/>
		</div>
	)
}

export default rezgoPlugin