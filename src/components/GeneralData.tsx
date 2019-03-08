import React from 'react'
import { VisibilityFilters, addTodo } from '../actions'
import fotoPresentacion from '../img/foto_react_learning.jpeg';
import coliseoPhoto from '../img/Roma-ninos-coliseo.jpg';
import pantheon from '../img/Pantheon-Roma.jpg';
import { Link } from 'react-router-dom';
import logo from './logo.svg';


import { connect } from 'react-redux';
import { setNumSlide } from '../actions';

import { store } from '../../src/index'

const SlideActive = (props:any) => {
	console.log("entra en SlideActive");
	if(props.dataSlideTo==props.actualSlide){
		return(
			<li data-target="#myCarousel" data-slide-to={props.dataSlideTo} className="active"></li>
		)
	}
	else{
		return(
			<li data-target="#myCarousel" data-slide-to={props.dataSlideTo} className=""></li>
		)
	}

};

const RenderSlide = (props:any) => {
	if(props.activeSlide==props.numSlide){
		console.log("entra en RenderSlide1")
		return(
			<div className="item active">
				<img className=".img-responsive" src={props.imgUrl} alt="Image" />
				<div className="carousel-caption">
					<h3> Principal Foto</h3>
					<p> Rome</p>
				</div>
			</div>
		)
	}
	else{
		console.log("entra en RenderSlide2")
		return(
        	<div className="item">
				<img className=".img-responsive" src={props.imgUrl} alt="Image" />
				<div className="carousel-caption">
					<h3>More Sell $</h3>
					<p>Lorem ipsum...</p>
				</div>
			</div>
        )
	}

}

class GeneralData extends React.Component<any,any> {

	constructor(props:any) {
		super(props);
		this.state = {
			numSlide: 0
		};
  }

	changeNumSlide = () => {
		console.log("entra en changeNumSlide");
		console.log("-------------------------------------------");
		if(this.state.numSlide ==0){
			this.setState({numSlide:1});
			this.props.dispatch(setNumSlide(1));
		}
		else{
			this.setState({numSlide:0});
			this.props.dispatch(setNumSlide(0));
		}
		console.log(this.state.numSlide);
		console.log("-----------A continuacion el store.getState().actualSlide--------------------");
		console.log(store.getState().actualSlide);
	}


	// Note: on line 95 ( It should be a div, with a clickable function on it, it should controll if it's open or not with a boolean controller)

	render(){
		console.log("entra en GeneralData");
		console.log("Actualmente el numero de slide es:")
		console.log(this.state.numSlide);
		return(
			<div>
			<nav className="navbar navbar-inverse">
			  <div className="container-fluid">
				<div className="navbar-header">	
				  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
				  </button>
				  <img src={logo} className="ApplogoLittle" alt="logo" />
				</div>
				<div className="collapse navbar-collapse" id="myNavbar">
				  <ul className="nav navbar-nav">
					<li className="active"><a href="#">Home</a></li>

					<li>
						<Link to="/About">
							<p>About</p>	
        		</Link>
					</li>	
					<li><a href="#">Projects</a></li>
					<li><a href="#">Contact</a></li>
				  </ul>
				  <ul className="nav navbar-nav navbar-right">
					<li><a href="#"><span ></span> Date</a></li>
				  </ul>
				</div>
			  </div>
			</nav>

			<div className="container">
			<div className="row">
			  <div className="col-sm-8">
				<div id="myCarousel" className="carousel slide" data-ride="carousel">
				  <ol className="carousel-indicators">
				  	<SlideActive dataSlideTo={0} actualSlide={this.state.numSlide} />
				  	<SlideActive dataSlideTo={1} actualSlide={this.state.numSlide} />
				  </ol>

				  <div className="carousel-inner">
				  	<RenderSlide activeSlide={this.state.numSlide} numSlide={0} imgUrl={coliseoPhoto} />
				  	<RenderSlide activeSlide={this.state.numSlide} numSlide={1} imgUrl={pantheon} />
				  </div>

				  <a className="left carousel-control" onClick={this.changeNumSlide} role="button" data-slide="prev">
					<span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
					<span className="sr-only">Previous</span>
				  </a>
				  <a className="right carousel-control" onClick={this.changeNumSlide}  role="button" data-slide="next">
					<span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
					<span className="sr-only">Next</span>
				  </a>
				</div>
			  </div>
			  <div className="col-sm-4">
				<div className="well">
				  <p>Name</p>
				</div>
				<div className="well">
				   <p>Year</p>
				</div>
				<div className="well">
				   <p>Birth Place</p>
				</div>
			  </div>
			</div>
			<hr/>
			</div>

			<div className="container text-center">
			  <h3>General Information</h3>
			  <p>Esto es un texto de prueba...........................................
			  ..........................................................................
			  ................................................................................
			  ...........................................................</p>

			  <br/>

			  <Link to="/CV">
					<button type="button" className="especialButton">
							GO TO CV
					</button>
        </Link>
			  <br/>
			  <hr/>


			  <div className="row">
				<div className="col-sm-3">
				  <img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive" style={{width:'100%'}} alt="Image" />
				  <p>Current Project</p>
				</div>
				<div className="col-sm-3">
				  <img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive" style={{width:'100%'}} alt="Image" />
				  <p>Project 2</p>
				</div>
				<div className="col-sm-3">
				  <div className="well">
				   <p>Some text..</p>
				  </div>
				  <div className="well">
				   <p>Some text..</p>
				  </div>
				</div>
				<div className="col-sm-3">
				  <div className="well">
				   <p>Some text..</p>
				  </div>
				  <div className="well">
				   <p>Some text..</p>
				  </div>
				</div>
			  </div>
			  <hr />
			</div>

			<br/>

			<footer className="container-fluid text-center">
			  <p>Footer Text</p>
			</footer>
			</div>
		)
	}
}

export default connect()(GeneralData)