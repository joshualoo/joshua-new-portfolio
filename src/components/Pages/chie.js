import React from 'react'
import ProjectsNavbar from '../ProjectsNavbar/ProjectsNavbar'

import chieLogo from "../../images/portfolio/chie/chie-logo.png";
import homepage from "../../images/portfolio/chie/homepage.jpg";
import homepage2 from "../../images/portfolio/chie/homepage-2.jpg";
import designer from "../../images/portfolio/chie/designer.jpg";

// import profileMobile from "../../images/portfolio/chie/profile-mobile.jpg";
import servicesMobile from "../../images/portfolio/chie/services-mobile.jpg";
import cartMobile from "../../images/portfolio/chie/cart-mobile.jpg";

// import mobile4 from "../../images/portfolio/chie/mobile-4.jpg";
// import mobile5 from "../../images/portfolio/chie/mobile-5.jpg";
import mobile6 from "../../images/portfolio/chie/mobile-6.jpg";

const chie = () => {
  return (
    <div>
		<section className="section">
			<div className="container">
				<div className="columns is-vcentered logo-text-columns single-work-column">
					<div className="column">
						<h3 className="title portfolio-title is-size-1">Chie Imai</h3>
					</div>
					<div className="column image-column">
						<img
							src={chieLogo}
							alt="Chie Imai Logo"
							className="image"
						/>
					</div>
				</div>

				<div className="columns single-work-column">
					<div className="column is-two-thirds">
						<h2 className="section__title is-size-3">brief</h2>

						<p>
							A refresh of their previous website with a revamped design. In
							addition to that, there was a need to market their products to the
							North American market, which were a part of their longstanding
							expansion plans.
							<br />
							<br />
							What we achieved together in the end was a bilingual website in
							both Japanese and English, a handful of custom made pages that
							highlighted their rich history and products and a fully functional
							e-commerce site.
						</p>
					</div>
					<div className="column"></div>
				</div>

				<div className="columns single-work-column">
					<div className="column is-two-thirds">
						<h2 className="section__title">in sentences</h2>
						<p>
							Built with Wordpress.
							<br />
							<br />
							Used ACF PRO to manage the custom elements of different pages.
							<br />
							<br />
							Customized Polylang and Woocommerce to ensure a consistent
							experience throughout both languages.
						</p>
					</div>
				</div>

				<div className="columns portfolio-img__columns">
					<div className="column">
						<img src={homepage} className="img-box-shadow" alt="Desktop Homepage" />
						<img
							src={homepage2}
							className="img-box-shadow"
							alt="Desktop Homepage 2"
						/>
						<img src={designer} className="img-box-shadow" alt="Designer Page" />
					</div>
				</div>

				<div className="columns portfolio-img__column">
					<div className="column has-text-centered">
						<img
							src={servicesMobile}
							className="img-box-shadow"
							alt="Services Page"
						/>
					</div>
					<div className="column has-text-centered">
						<img src={cartMobile} className="img-box-shadow" alt="Cart Page" />
					</div>
					<div className="column has-text-centered">
						<img src={mobile6} className="img-box-shadow" alt="Mobile Page 6" />
					</div>
				</div>
			</div>
		</section>
		<ProjectsNavbar/>

	</div>
  )
}

export default chie