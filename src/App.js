import { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'

import Home from './components/Pages/home'
import Chie from './components/Pages/chie'
import Hayer from './components/Pages/hayer'
import RezgoMarketing from './components/Pages/rezgo-marketing'

import ScrollToTop from './components/ScrollToTop/ScrollToTop'

import 'bulma/css/bulma.min.css';
import './App.css'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
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
  )
}

export default App