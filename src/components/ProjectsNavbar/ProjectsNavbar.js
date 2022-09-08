
import { projects, skills, contact } from '../../portfolio'
import './ProjectsNavbar.css'
import {Link} from "react-router-dom"

const ProjectsNavbar = () => {
	let slug = location.pathname.split('/').slice(1).toString();
	let currentIndex;
	let nextProject;
	let prevProject;

	projects.forEach( (element, index) => {
			if (element['pageLink'] == '/'+slug) {
				currentIndex = `${index}`;
			}
		}
	);
	prevProject = projects[parseInt(currentIndex) - 1] ? projects[parseInt(currentIndex) - 1]['pageLink'] : '';
	nextProject = projects[parseInt(currentIndex) + 1] ? projects[parseInt(currentIndex) + 1]['pageLink'] : '';

	return ([
		<div className="projectNavbar-wrapper">
			<div className="columns">
				{prevProject ? <div className="column"><Link to={prevProject} className="link black">prev</Link></div> : ''}

				<div className="column">
					<Link to="/" className="link black">home</Link>
				</div>

				{nextProject ? <div className="column"><Link to={nextProject} className="link black">next</Link></div> : ''}
			</div>
		</div>
	])
}

export default ProjectsNavbar
