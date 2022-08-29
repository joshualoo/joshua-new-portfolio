import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, role, description, resume, social } = about

  return (
    <div className='about center text-center'>
      {name && (
        <h1>
          hi there! <br />
		  I'm <span className='about__name'>{name}</span>
        </h1>
      )}

      <p className='about__desc'>{description && description}</p>

		<div className='about__contact center'>
			{/* {resume && (
			<a href={resume}>
				<span type='button' className='btn btn--plain'>
				Resume
				</span>
			</a>
			)} */}

			{/* <a href={`mailto:${contact.email}`}>
				<span type='button' className='btn btn--plain'>
				Email me
				</span>
			</a> */}

			{social && (
			<>
				{social.github && (
				<a
					href={social.github}
					aria-label='github'
					target="_blank"
				>
					<span type='button' className='btn btn--plain'>
					 Github
					</span>
				</a>
				)}

				{social.linkedin && (
				<a
					href={social.linkedin}
					aria-label='linkedin'
					target="_blank"
				>
					<span type='button' className='btn btn--plain'>
					LinkedIn
					</span>
				</a>
				)}
			</>
			)}
		</div>

    </div>
  )
}

export default About
