import React from 'react'
import Footer from './Footer'
import Header from './Header'
import GeneralData from './GeneralData'
import Home from './Home'
import About from './About'
import {store} from '../index.js'
import { BrowserRouter as Router, Route } from 'react-router-dom'


const App = () => {

	return (
		<Router>
			<switch>
				<Route path={"/"} component={Home} exact />
				<Route path={"generalData"} component={GeneralData} />
			</switch>
		</Router>
	)
}

export default App