import React from "react";
import "./project.css";
import Fade from 'react-reveal/Fade';
import "animate.css/animate.min.css";
import liberation from "./Images/Liberation.jpg"


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
                    <Fade top>
                        <p id = "projectText">Projects</p>
                    </Fade>
                    
                    <Fade left>  
                        <div class = "project">
                            <img src={liberation} alt="Liberation" class="image" width = "50%"></img>
                            <div class="middle">
                                <div class="text">
                                    
                                    <p>TEST</p>
                                </div>
                            </div>
                        </div>
                    </Fade>

                    <Fade right>
                        <div class = "projectImage">
                        </div>          
                    </Fade>   

                </div>     
     
        )
    }
}