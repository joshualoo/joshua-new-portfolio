import uniqid from 'uniqid'
import './ProjectContainer.css'
import {Link} from "react-router-dom"

const ProjectContainer = ({ project }) => (

	<Link to={project.pageLink}>

		<div className='project'>
			<h3>{project.name}</h3>

			<p className='project__description'>{project.description}</p>
			{project.stack && (
			<ul className='project__stack'>
				{project.stack.map((item) => (
				<li key={uniqid()} className='project__stack-item'>
					{item}
				</li>
				))}
			</ul>
			)}

			{/* {project.sourceCode && (
			<a
				href={project.sourceCode}
				aria-label='source code'
				className='link link--icon'
				target="_blank"
			>
				<GitHubIcon />
			</a>
			)}

			{project.livePreview && (
			<a
				href={project.livePreview}
				aria-label='live preview'
				className='link link--icon'
				target="_blank"
			>
				<LaunchIcon />
			</a>
			)} */}

		</div>
	</Link> 
)

export default ProjectContainer