import {store} from '../index'
import React from 'react'
import { any } from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class About extends React.Component<any,any>{

    constructor(props:any){
        super(props);
        this.controlStore = this.controlStore.bind(this);

        this.state = {
            imageNumber:store.getState().actualSlide
        };
    let unsubsribe= store.subscribe(this.controlStore);    
    }

    controlStore(): void{
        console.log("-----Ha entrado en controlStore del subscriber ----------")
        console.log(store.getState());
        console.log(store.getState());
        if ( store.getState().actualSlide != this.state.imageNumber){
            this.setState({
                imageNumber: store.getState().actualSlide
            })
        }
    }

    render() { 
        return(
            <div>
                <p>Esto es About y debería tener el numero de la foto: {this.state.imageNumber}</p>
                <Link to="/generalData">
                    <p>About</p>	
                </Link>
            </div>
        )        
    }
}

export default connect()(About)