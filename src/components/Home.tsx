import React from 'react'
import Footer from './Footer'
import Header from './Header'
import GeneralData from './GeneralData'
import EntranceButton from './EntranceButton'
import {store} from '../index'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom'


import logo from './logo.svg';

function getDate(){
	const date = new Date();
	return date;
	//<Route path="/" render={(props) => <ButtonToNavigate {...props} title="App" />} />
}

const ButtonToNavigate = (props:any) => {
	console.log("hola")
	console.log(history)
	return(
		<button
            type="button"
            onClick={() => props.history.push('/generalData')}
          >
            {props.title}
          </button>
	)
};

class Home extends React.Component {

	render(){
		console.log(store.getState())

    	return (
    	<div>
    		<div className="container2">
    		  <div className="item">
    		  	<img src={logo} className="Applogo" alt="logo" />
    			<h3 className="whiteText">-- React + TypeScript + Redux --</h3>
    			<hr />
    			<br /><br />
    			<EntranceButton />
    		  </div>
    		</div>
    	</div>
    	)
	}
}

export default Home