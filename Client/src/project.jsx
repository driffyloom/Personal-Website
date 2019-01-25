import React from "react";
import "./project.css";
import Zoom from 'react-reveal/Zoom';
import "animate.css/animate.min.css";

export default class ReactProjects extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    componentDidMount(){}

    render(){
        return(
            <div id = "projectSpace">
                <p>Markup that will be revealed on scroll</p>
            </div>
     
        )
    }
}