import About from '../../components/About/About'
import Projects from '../../components/Projects/Projects'
import Skills from '../../components/Skills/Skills'
import Experience from '../../components/Experience/Experience'

const home = () => {
	return (
		<div>
			<About />
			<Projects />
			<Skills />
			<Experience />
		</div>
	)
}

export default home