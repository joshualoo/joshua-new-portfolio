const header = {
		homepage: 'https://joshualoo.ca',
		title: 'hi.',
	}

const about = {
	name: 'Joshua',
	description:
		'I am a multidisciplinary web developer. I love typing words into working, functional software.',
	resume: 'https://joshualoo.ca/resume',
	social: {
		linkedin: 'https://linkedin.com/in/joshua-loo-kc/',
		github: 'https://github.com/joshualoo',
	},
}

const projects = [
	{
		name: 'Rezgo Frontend',
		description:
		'Developed new features and overhauled the UI of the Rezgo booking system.',
		stack: ['PHP', 'SQL', '', ''],
		sourceCode: 'https://github.com/rezgo',
		livePreview: 'https://joshua.rezgo.com',
		pageLink:'/rezgo',
	},
	{
		name: 'Rezgo Marketing Site',
		description:
		'Refreshed look aimed at increasing user conversion to Rezgo Booking Engine',
		stack: ['Node', 'SASS', 'Wordpress', 'ACF'],
		livePreview: 'https://rezgo.com',
		pageLink:'/rezgo-marketing-site',
	},
	{
		name: 'Rezgo Wordpress Plugin',
		description:
		'Further enhancing the Rezgo experience, available as a standalone Wordpress plugin',
		stack: ['PHP', 'Wordpress'],
		livePreview: 'https://rezgo.com',
		pageLink:'/rezgo-marketing-site',
	},
	{
		name: 'Chie Imai',
		description:
		'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
		stack: ['Node', 'SASS', 'Wordpress', 'ACF'],
		livePreview: 'https://chieimai.com',
		pageLink:'/chie',
	},
	{
		name: 'Hayer Builders Group',
		description:
		'Website refresh highlighting the many developments done by the company.',
		stack: ['Node', 'SASS', 'Wordpress', 'ACF'],
		livePreview: 'https://hayerbuildersgroup.com',
		pageLink:'/hayer',
	},

]

const skills = [
	'SASS',
	'JavaScript',
	'Wordpress',
	'PHP',
	'React',
	'Git',
	'SQL',
	'Node',
	'CI/CD',
]

const experiences = [
	{
		company: 'Rezgo',
		current: '• current employer',
		title: 'Full Stack Developer',
		description:
		'Responsible for developing new features and maintaining existing functionalities for the Rezgo booking engine. Update, and maintain Rezgo\'s Wordpress plugin that integrates and connect Wordpress sites seamlessly to the Rezgo API.',
		length: 'Jul 2020 - Present',
	},
	{
		company: 'Ballistic Arts',
		title: 'Front End Developer',
		description:
		'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
		length: 'Aug 2019 - Jul 2020 (1 year)',
	},
	{
		company: 'WittyCookie',
		title: 'Front End Developer',
		description:
		'Responsible for developing fully functional websites from designer mockups and interaction flowcharts. Maintained over 25 concurrent websites, subscribed through various WittyCookie plans',
		length: 'Jul 2016 - Jun 2018 (2 years)',
	},
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'joshua.loo.kc@gmail.com',
}

export { header, about, projects, skills, experiences, contact }
