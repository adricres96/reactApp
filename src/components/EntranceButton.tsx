import React from 'react'
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom'

const Navigate = () => {
	console.log("entraEnNavigate")
	return(
		<Link to='/generalData' />
	)
};

const EntranceButton = () => (
	<div className="wrapper">
	<Link to='/generalData' >
		<svg className="svg"
        	  width="18px" height="17px" viewBox="0 0 18 17" version="1.1" xmlns="http://www.w3.org/2000/svg" >
        		  <polygon className="arrow" points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596"></polygon>
        		  <polygon className="arrowfixed" points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596"></polygon>
        		  <path d="M-1.48029737e-15,0.56157424 L-1.48029737e-15,16.1929159 L9.708,8.33860465 L-2.66453526e-15,0.56157424 L-1.48029737e-15,0.56157424 Z M1.33333333,3.30246869 L7.62533333,8.34246869 L1.33333333,13.4327013 L1.33333333,3.30246869 L1.33333333,3.30246869 Z"></path>
        	  </svg>
	</Link>
	</div>
)

export default EntranceButton