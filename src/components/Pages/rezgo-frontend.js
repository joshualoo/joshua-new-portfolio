import React from 'react'
import ProjectsNavbar from '../ProjectsNavbar/ProjectsNavbar'
import rezgoLogo from "../../images/portfolio/rezgo-frontend/rezgo-logo.png";
import { ReactCompareSlider, ReactCompareSliderImage, ReactCompareSliderHandle } from 'react-compare-slider';

import home from "../../images/portfolio/rezgo-frontend/home.jpg";
import home_old from "../../images/portfolio/rezgo-frontend/home_old.jpg";
import details from "../../images/portfolio/rezgo-frontend/details.jpg";
import details_old from "../../images/portfolio/rezgo-frontend/details_old.jpg";
import order_page from "../../images/portfolio/rezgo-frontend/order_page.jpg";
import order_page_old from "../../images/portfolio/rezgo-frontend/order_page_old.jpg";
import receipt_page from "../../images/portfolio/rezgo-frontend/receipt_page.jpg";
import receipt_page_old from "../../images/portfolio/rezgo-frontend/receipt_page_old.jpg";

import elements from "../../images/portfolio/rezgo-frontend/elements.jpg";
import elements_new from "../../images/portfolio/rezgo-frontend/elements_new.jpg";
import calendar from "../../images/portfolio/rezgo-frontend/calendar_old.jpg";
import calendar_new from "../../images/portfolio/rezgo-frontend/calendar_new.jpg";
import header from "../../images/portfolio/rezgo-frontend/header_old.jpg";
import header_new from "../../images/portfolio/rezgo-frontend/header_new.jpg";

const rezgoFrontEnd = () => {
	const sliderPosition = 25;
	const handleColor = '#888';

	return (
		<div>
			<section className="section">
				<div className="container">
					<div className="columns is-vcentered logo-text-columns single-work-column">
						<div className="column">
							<h3 className="title portfolio-title is-size-1">Rezgo Frontend</h3>
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
								I was entrusted with redesigning and implementing the booking flow changes. 
								I was given a lot of creative freedom, to experiment with what worked and what did not.
								<br />
								<br />
								It was a significant departure from the more default 'bootstrap' stylings to a more stylized look that fits with modern web design.
								<br />
								<br />
								There are a lot more rounded borders, with slight box shadows to give attention to more important elements. Font styles and sizes were tweaked, icons and buttons updated... 
								<br />
								<br />

								You get the picture. A <em>literal</em> facelift if you will.
								<br />
								<br />
								Walk through the design evolution with the comparison slider below. 
								<br />
							</p>	
						</div>
					</div>
					<hr />

					<div className="columns portfolio-img__columns is-align-items-center">
						<div className="column is is-two-fifths">
							<h2 className="">1. Tour Page</h2>
							<br />
							<p>The first point of entry for users, a basic list view of what is available for booking</p>
						</div>
						<div className="column"></div>
						<div className="column is-half">
							<ReactCompareSlider className="img-box-shadow restrict-height sm top" 
								position={sliderPosition}
							 	handle={<ReactCompareSliderHandle style={{color: handleColor}} />}
								itemTwo={<ReactCompareSliderImage src={home} alt="Home" />}
								itemOne={<ReactCompareSliderImage src={home_old} alt="Home Old"/>}
							/>
						</div>
					</div>
					<hr />

					<div className="columns portfolio-img__columns is-align-items-center">
						<div className="column is-two-fifths">
							<h2 className="">2. Details Page</h2>
								<br />
							<p>The hero image is moved to a central position and the details + calendar takes second stage.</p>
							<br />
							<p>Calendar is vastly redesigned to a cleaner, modern look, with a simpler colour palette </p>
							<br />
							<p>Itinerary, and other details and tucked in more organized box panels rather than floating in open space</p>
							<br />
							<p>Related items at the bottom are also given a much needed facelift with e-commerce like slider approach rather than a list of products</p>
						</div>
						<div className="column"></div>
						<div className="column is-half">
							<ReactCompareSlider className="img-box-shadow restrict-height md top"
								position={sliderPosition}
							 	handle={<ReactCompareSliderHandle style={{color: handleColor}} />}
								itemTwo={<ReactCompareSliderImage src={details} alt="Details Page" />}
								itemOne={<ReactCompareSliderImage src={details_old} alt="Details Page Old" />}
							/>
						</div>
					</div>
					<hr />

					<div className="column is-two-fifths">
						<h2 className="">3. Order Page</h2>
					</div>
					<div className="columns portfolio-img__columns is-align-items-center">
						<div className="column">
							<ReactCompareSlider className="img-box-shadow restrict-height md"
								position={sliderPosition}
							 	handle={<ReactCompareSliderHandle style={{color: handleColor}} />}
								itemTwo={<ReactCompareSliderImage src={order_page} alt="Order Page" />}
								itemOne={<ReactCompareSliderImage src={order_page_old} alt="Order Page Old" />}
							/>
						</div>
					</div>
					<hr />

					<div className="column is-two-fifths">
						<h2 className="">4. Receipt Page</h2>
					</div>
					<div className="columns portfolio-img__columns">
						<div className="column">
							<ReactCompareSlider className="img-box-shadow restrict-height top"
								position={sliderPosition}
							 	handle={<ReactCompareSliderHandle style={{color: handleColor}} />}
								itemTwo={<ReactCompareSliderImage src={receipt_page} alt="Receipt Page" />}
								itemOne={<ReactCompareSliderImage src={receipt_page_old} alt="Receipt Page Old" />}
							/>
						</div>
					</div>
					<hr />

					<div className="column is-two-fifths">
						<h2 className="">5. Other Elements</h2>
					</div>

					<div className="columns portfolio-img__columns">
						<ReactCompareSlider className="img-box-shadow restrict-height top"
								position={sliderPosition}
							 	handle={<ReactCompareSliderHandle style={{color: handleColor}} />}
								itemTwo={<ReactCompareSliderImage src={header_new} alt="Receipt Page" />}
								itemOne={<ReactCompareSliderImage src={header} alt="Receipt Page Old" />}
							/>
					</div>

					<div className="columns portfolio-img__columns is-justify-content-space-around">
						<ReactCompareSlider className="img-box-shadow is-one-third"
								position={sliderPosition}
							 	handle={<ReactCompareSliderHandle style={{color: handleColor}} />}
								itemTwo={<ReactCompareSliderImage src={elements_new} alt="Receipt Page" />}
								itemOne={<ReactCompareSliderImage src={elements} alt="Receipt Page Old" />}
							/>
						<ReactCompareSlider className="img-box-shadow is-one-third"
							position={sliderPosition}
						 	handle={<ReactCompareSliderHandle style={{color: handleColor}} />}
							itemTwo={<ReactCompareSliderImage src={calendar_new} alt="Receipt Page" />}
							itemOne={<ReactCompareSliderImage src={calendar} alt="Receipt Page Old" />}
						/>
					</div>
					<hr />

				</div>

				<br />
				<br />

				<div className="columns single-work-column">
					<div className="column is-four-fifths">
						<h2 className="section__title">marrying data with design</h2>
						<p>
							Almost everything that you see on the frontend is informed by the data received from the API 
							<br />(Calendar availabilities, payment options, prices and ratings )
							<br />
							<br />
							
							In addition to the massive frontend redesign, I was also tasked with the cart API integration.
							<br />
							<br />
							The Cart API is a system that allows tour items and customer information to be saved into a unique token-based 'cart' that can be interfaced with JSON or XML. All of the associated cart information are linked to this one token. 
							<br />
							<br />
							This was a major improvement over storing cart items in a serialized cookie array.
						</p>
					</div>
				</div>

					
			</section>
			<ProjectsNavbar/>
		</div>
	)
}

export default rezgoFrontEnd