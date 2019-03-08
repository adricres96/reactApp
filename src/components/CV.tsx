import {store} from '../index'
import React from 'react'
import { any } from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setDropdownVisibilityFilter } from '../actions';

interface Elemento {
    title:string;
    component: string[];
}

let elemento: Elemento = {title:"hehe", component:["hlell"]}

let list: Elemento[] = [elemento]


const Tecnologies = (props:any) => {

    if(props.controller == true){
        return(
            <div>
            <div>mysql</div>
            <div>oracle</div>
            </div>
        )
    }
    else{
        return <hr />
    }    console.log("ha entrado en Tecnologies")
}

class CV extends React.Component<any,any> {
    
    constructor(props:any){
        super(props);
        let elemento: Elemento = {title:"",component:[]}
        let initialList: Elemento[] = [elemento]
        this.state = {
            list: initialList,
            viewController: store.getState().listFilter
        };
        let unsuscribe= store.subscribe(this.updateData);
    }

    updateData = () => {
        console.log("entra en el subscribe de cv para actualizar el viewController")
        this.setState({
            viewController: store.getState().listFilter
        }) 
        
    }

    clickComponent = (index:number) => {
        let change= this.state.viewController;
        let listMaintain = this.state.list;
        change[index]=!change[index]
        this.setState({
            list: listMaintain,
            viewController: change
        })
        store.dispatch(setDropdownVisibilityFilter(this.state.viewController));
    }

    render(){
        return(
            <div className="container">
                <p>hola</p>
                <div className="row">
                    <div className="col-md-12">
                        <h2 onClick={() => {this.clickComponent(0)}}>Database</h2>
                        <Tecnologies controller={store.getState().listFilter[0]} />
                    </div>
                </div>

                ..
                <div className="row">
                    <div className="col-md-12">
                        <h2 onClick={() => {this.clickComponent(1)}}>Backend</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <h2 onClick={() => {this.clickComponent(2)}}>Frontend</h2>
                    </div>
                </div>
            </div>
        )
    }
    

}

export default connect()(CV); 