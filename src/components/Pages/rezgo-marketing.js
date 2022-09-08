import React from 'react'
import ProjectsNavbar from '../ProjectsNavbar/ProjectsNavbar'
import rezgoLogo from "../../images/portfolio/rezgo-frontend/rezgo-logo.png";

import marketing_1 from "../../images/portfolio/rezgo-marketing/marketing_1.jpg";
import marketing_2 from "../../images/portfolio/rezgo-marketing/marketing_2.jpg";
import marketing_3 from "../../images/portfolio/rezgo-marketing/marketing_3.jpg";

import mobile_1 from "../../images/portfolio/rezgo-marketing/mobile_1.jpg";
import mobile_2 from "../../images/portfolio/rezgo-marketing/mobile_2.jpg";
import mobile_3 from "../../images/portfolio/rezgo-marketing/mobile_3.jpg";


const rezgoMarketing = () => {
	return (
		<div>
			<section className="section">
				<div className="container">
					<div className="columns is-vcentered logo-text-columns single-work-column">
						<div className="column">
							<h3 className="title portfolio-title is-size-1">Rezgo Marketing Site</h3>
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
								A fresh redesign of the previous marketing site, the purpose of the website was to drive in new sales and conversions to the Rezgo Booking System.
								<br />
								<br />
								The web design was done by an external web agency, and the actual build was completed and launched by the in-house Rezgo team. 
							</p>
						</div>
						<div className="column"></div>
					</div>
					<hr />

					<div className="columns single-work-column">
						<div className="column is-four-fifths">
							<p>
								Built with Wordpress.
								<br />
								<br />
								Used ACF PRO in conjunction with Gutenberg blocks to manage custom reusable blocks.
								<br />
								<br />
								This allowed for faster page builds in terms of development and for marketing staff to have easier access to modifying the content in the Wordpress Dashboard.
								<br />
								<br />
							</p>
						</div>
					</div>

					<div className="columns portfolio-img__columns">
						<div className="column">
							<img src={marketing_1} className="img-box-shadow" alt="Marketing Site 1" />
							<img
								src={marketing_2}
								className="img-box-shadow"
								alt="Marketing Site 2"
							/>
							<img src={marketing_3} className="img-box-shadow" alt="Marketing Site 3" />
						</div>
					</div>


					<div className="columns portfolio-img__column">
						<div className="column has-text-centered">
							<img
								src={mobile_1}
								className="img-box-shadow"
								alt="Mobile Page 1"
							/>
						</div>
						<div className="column has-text-centered">
							<img src={mobile_2} className="img-box-shadow" alt="Mobile Page 2" />
						</div>
						<div className="column has-text-centered">
							<img src={mobile_3} className="img-box-shadow" alt="Mobile Page 3" />
						</div>
					</div>


				</div>
			</section>

			<ProjectsNavbar/>
		</div>
	)
}

export default rezgoMarketing