import React from 'react';
import ReactDOM from 'react-dom';
import Title from "./index.jsx";
import Projects from "./project.jsx";
import Contact from "./contact.jsx";

export default class Root extends React.Component{
    constructor(props){
        super(props)
        //states any state (for things like clicked info inside etc. anything dynamic)
        this.state = {

        }
    }
    //initial stage that starts everything
    componentDidMount(){}

    //helper functions below

    //render for showing up on the page
    //put photo here
    render(){
        return(
            <div>
                <div id = "titlePage"><Title /></div>
                <div id = "projects"><Projects /></div>  
                <div id = "contact"><Contact /></div>   
            </div>
        )
    }
}