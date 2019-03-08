import React, {Component} from "react"

function getDate(){
	const date = new Date();
	return date;
}

class Header extends Component<any,any> {
	constructor(props:any) {
      super(props);
      this.state = {
        date: new Date().toLocaleString().substr(0,10)
      };
    }

//	componentDidMount() {
//		this.setState({loading: true})
//		fetch("https://swapi.co/api/people/")
//			.then(response => response.json())
//			.then(data => {
//				this.setState({
//					loading: false,
//					character: data
//				})
//			})
//	}

//	<div>
//		<div className="topleft">Adrián Crespo Miguel</div>
//		<div className="topright">{this.state.date}</div>
//	</div>

    render(){
    	console.log("entra en ele header");
    	return(
    		<div className="container">
              <div className="item">
                <h3></h3>
                <h1>To do</h1>
                <p> Click to list </p>
                <button className="btn btn-primary">cambia</button>
              </div>
            </div>
    	)
    }
}

export default Header