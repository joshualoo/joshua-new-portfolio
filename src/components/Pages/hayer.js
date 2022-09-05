import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../../contexts/theme'
import ProjectsNavbar from '../ProjectsNavbar/ProjectsNavbar'

import hayerLogo from "../../images/portfolio/hayer/logo.png";

import desktop1 from "../../images/portfolio/hayer/desktop1.jpg";
import desktop2 from "../../images/portfolio/hayer/desktop2.jpg";
import desktop3 from "../../images/portfolio/hayer/desktop3.jpg";
import desktop4 from "../../images/portfolio/hayer/desktop4.jpg";

import mobile1 from "../../images/portfolio/hayer/mobile1.jpg";
import mobile2 from "../../images/portfolio/hayer/mobile2.jpg";
import mobile3 from "../../images/portfolio/hayer/mobile3.jpg";

const hayer = () => {
  return (
    <div>
		<section className="section">
			<div className="container">
				<div className="columns is-vcentered logo-text-columns single-work-column">
					<div className="column">
						<h3 className="title portfolio-title is-size-1">
							Hayer Builders Group
						</h3>
					</div>
					<div className="column image-column">
						<img
							src={hayerLogo}
							alt="Hayer Builders Group Logo"
							className="image"
						/>
					</div>
				</div>

				<div className="columns single-work-column">
					<div className="column is-two-thirds">
						<h2 className="section__title is-size-3">brief</h2>

						<p>
							Hayer Builders Group website refresh.
							<br />
							<br />
							Highlighting the many commercial and housing developments done by
							the company.
							<br />
							<br />
							Imagery and Typography based brochure site designed to showcase
							present, and upcoming projects.
						</p>
					</div>
					<div className="column"></div>
				</div>

				<div className="columns single-work-column">
					<div className="column is-two-thirds">
						<h2 className="section__title is-size-3">in sentences</h2>
						<p>
							Built with a custom Wordpress starter theme with Bootstrap.
							<br />
							<br />
							Used ACF Pro for different section layouts and reusable content
							modules that can be placed on any page.
							<br />
							<br />
							Ran Sass compiler and CSS/JS minifiers with grunt.
						</p>
					</div>
				</div>

				<div className="columns portfolio-img__columns">
					<div className="column">
						<img src={desktop3} className="img-box-shadow" alt="Desktop Page 3" />
						<img src={desktop1} className="img-box-shadow" alt="Desktop Page 1" />
						<img src={desktop4} className="img-box-shadow" alt="Desktop Page 4" />
						<img src={desktop2} className="img-box-shadow" alt="Desktop Page 2" />
					</div>
				</div>

				<div className="columns portfolio-img__column">
					<div className="column has-text-centered">
						<img src={mobile1} className="img-box-shadow" alt="Mobile Page 1" />
					</div>
					<div className="column has-text-centered">
						<img src={mobile2} className="img-box-shadow" alt="Mobile Page 2" />
					</div>
					<div className="column has-text-centered">
						<img src={mobile3} className="img-box-shadow" alt="Mobile Page 3" />
					</div>
				</div>
			</div>
			<ProjectsNavbar/>
		</section>

		{/* <div className="container links-container">
			<div className="columns is-vcentered is-mobile">
				<div className="column is-one-third-mobile">
					<Link className="link" to="/bcsca">
						{" "}
						&larr; Prev
					</Link>
				</div>

				<div className="column is-one-third-mobile has-text-centered">
					<Link className="link" to="/">
						{" "}
						Home
					</Link>
				</div>

				<div className="column is-one-third-mobile has-text-right">
					<Link className="link" to="/chie-imai">
						{" "}
						Next &rarr;
					</Link>
				</div>
			</div>
		</div> */}
	</div>
  )
}

export default hayer