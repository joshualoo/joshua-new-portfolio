
import { projects, skills, contact } from '../../portfolio'
import './ProjectsNavbar.css'
import {Link} from "react-router-dom"

const ProjectsNavbar = ({project}) => {

	return (
		<div className="projectNavbar-wrapper">
			<a href="/" className="link black">Home</a>
		</div>
	)
}

export default ProjectsNavbar
