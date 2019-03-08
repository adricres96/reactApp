//import React from "react"
//import ReactDOM from "react-dom"
//
//import App from "./App"
//
//ReactDOM.render(<App />, document.getElementById("root"))

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import Home from './components/Home'
import GeneralData from './components/GeneralData'
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import About from './components/About';
import CV from './components/CV';


export const store = createStore(rootReducer, composeWithDevTools( ));

render(
	<Provider store={store}>
		<BrowserRouter basename={'/adricres96/reactApp'}>
			<Switch>
				<Route path={"/"} component={Home} exact />
				<Route path={"/generalData"} component={GeneralData} />
				<Route path={"/About"} component={About} />
				<Route path={"/CV"} component={CV} />
			</Switch>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
)
