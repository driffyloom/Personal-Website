import React from "react";
import "./CSS/project.css";
import Fade from 'react-reveal/Fade';
import "animate.css/animate.min.css";
import HoverImage from "./hoverImage.jsx";
import liberation from "./Media/Liberation.jpg";
import website from "./Media/Website.jpg";

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
                        <p id = "projectTitle">Projects</p>
                        <div>
                            <p id = "menuDescription">Check out my recent projects by clicking on the images!</p>
                        </div>
                    </Fade>

                    <div class = "projectSection">
                        <Fade left>  
                            <div>
                                <a href = "http://www.randosliberation.wordpress.com"> 
                                <HoverImage src={website} class = "projectImage"/>
                                </a>
                            </div>
                        </Fade>

                        <Fade right>
                            <div class = "projectTextBox">
                                <p class = "projectText">This website is my first foray into react, webpack, and the first project in my bi-weekly 2019 projects! 
                                </p>
                            </div>   
                        </Fade>     
                    </div>

                    <div class = "projectSection">
                        <Fade left>  
                            <div>
                                <a href = "https://github.com/driffyloom/Personal-Website"> 
                                <HoverImage src={liberation} class = "projectImage"/>
                                </a>
                            </div>
                        </Fade>

                        <Fade right>
                            <div class = "projectTextBox">
                                <p class = "projectText">I'm currently head developer of Liberation, a 3D action shooter game developed in UE4.</p>
                            </div>   
                        </Fade>
                    </div>
 

                </div>     
     
        )
    }
}
//<img src={liberation} alt="Liberation" class="projectImage" href = "http://randosliberation.wordpress.com" width = "50%"></img>
