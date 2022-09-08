import { useContext,useLayoutEffect,useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import { projects } from './portfolio'

import Home from './components/Pages/home'
import Chie from './components/Pages/chie'
import Hayer from './components/Pages/hayer'
import RezgoMarketing from './components/Pages/rezgo-marketing'
import RezgoFrontEnd from './components/Pages/rezgo-frontend'
import RezgoPlugin from './components/Pages/rezgo-plugin'

import ScrollToTop from './components/ScrollToTop/ScrollToTop'

import 'bulma/css/bulma.min.css';
import './App.css'

const Wrapper = ({children}) => {
	const location = useLocation();
	const quotes = ['Today is going to be a good day.', 
					'Problems are not stop signs; they are guidelines.', 
					'Try Again. Fail again. Fail better.',
					'Oh, the things you can find, if you don’t stay behind.'
					];
	const randomQuotes= quotes[Math.floor(Math.random() * quotes.length)];
	let slug = location.pathname.split('/').slice(1).toString();
	let homeLink = document.querySelector('#homeLink');
	let workTitle;

	useLayoutEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: "instant"});
		}, [location.pathname]);

	useEffect(() => {
		projects.forEach( (element) => {
				if (element['pageLink'] == '/'+slug) {
					workTitle = element['name'];
				}
			}
		);
		document.title = workTitle ? workTitle : randomQuotes;
		if (homeLink) homeLink.innerHTML = slug ? 'back?' : 'home.';
	});

	return children
} 

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
	<Wrapper>
		<div id='top' className={`${themeName} app`}>
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<Home/>}/>
					<Route path="/chie" element={<Chie/>}/>
					<Route path="/hayer" element={<Hayer/>}/>
					<Route path="/rezgo-frontend" element={<RezgoFrontEnd/>}/>
					<Route path="/rezgo-marketing" element={<RezgoMarketing/>}/>
					<Route path="/rezgo-plugin" element={<RezgoPlugin/>}/>
				</Routes>
			</main>
			<ScrollToTop />
		</div>
	</Wrapper>
  )
}

export default App