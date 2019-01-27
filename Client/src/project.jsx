import React from "react";
import "./CSS/project.css";
import Fade from 'react-reveal/Fade';
import "animate.css/animate.min.css";
import HoverImage from "./hoverImage.jsx";
import liberation from "./Media/Liberation.jpg";
import website from "./Media/Website.jpg";

export default class Projects extends React.Component{
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
                        <p id = "Title">Projects</p>
                    </Fade>

                    <hr></hr>

                    <div class = "projectSection">
                        <Fade left class = "fadeBlock">  
                            <div>
                                <a href = "https://github.com/driffyloom/Personal-Website"> 
                                <HoverImage src={website} class = "projectImage"/>
                                </a>
                            </div>
                        </Fade>

                        <Fade right class = "fadeBlock">
                            <div>
                                <div class = "projectText">
                                    <p class = "projectTitle"> Personal Website </p>
                                    <p class = "projectSubtitle"><a href = "https://github.com/driffyloom/Personal-Website" >Project Link</a> | January 2019</p>
                                    <p class = "projectDescription">This website is my first foray into react, webpack, and front end design! 
                                    It is the first project in my bi-weekly 2019 projects so keep a look out for more projects soon.
                                    </p>
                                </div>
                            </div>   
                        </Fade>     
                    </div>

                    <hr></hr>

                    <div class = "projectSection">
                        <Fade left class = "fadeBlock">  
                            <div>
                                <a href = "http://www.randosliberation.wordpress.com"> 
                                <HoverImage src={liberation} class = "projectImage"/>
                                </a>
                            </div>
                        </Fade>

                        <Fade right class = "fadeBlock">
                            <div class>
                                <div class = "projectText">
                                    <p class = "projectTitle"> Liberation </p>
                                    <p class = "projectSubtitle"> <a href = "http://www.randosliberation.wordpress.com" >Project Link</a> | September 2018 - January 2019</p>
                                    <p class = "projectDescription">Working with 4 other team members, I'm currently head developer and project lead of Liberation, a 3D action shooter game. 
                                                                    Built in UE4, Liberation features 4k textures and an original story with original art.</p>
                                </div>
                            </div>   
                        </Fade>
                    </div>
 

                </div>     
     
        )
    }
}