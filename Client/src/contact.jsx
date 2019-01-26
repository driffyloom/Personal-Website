//where you start creating react components\
import React from "react";
import './CSS/contact.css';
import HoverImage from "./hoverImage.jsx"
import Fade from 'react-reveal/Fade';
import profile from "./Media/Profile.jpg";
import gmail from "./Media/Gmail.png";
import linkedIn from "./Media/LinkedIn.png";
import document from './Media/document.jpg';

//creates a react div

export default class Contact extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

    componentDidMount(){}

    render(){
        return(
            <div>
                <Fade left>
                    <div id = "profilePicBox">
                        <a href = "https://www.linkedin.com/in/austin-chiang-66a45b133/"> 
                            <HoverImage src={profile} id = "profilePic"/>
                        </a>
                    </div>
                </Fade>
                <Fade right>
                    <div id = "contactInfoBox">
                        <div id = "ContactInfo">
                            <h2 id = "GetInTouch">Get in touch!</h2>
                            <div>
                                <a href ="mailto:austinchiang2012@gmail.com"><img src = {gmail} class = "icon"></img></a>
                                <p class = "contactText">Email: <a href = "mailto:austinchiang2012@gmail.com" class = "contactLink">austinchiang2012@gmail.com</a></p>
                            </div>
                            <div>
                                <a href = "https://www.linkedin.com/in/austin-chiang-66a45b133/"><img src = {linkedIn} class = "icon"></img></a>   
                                <p class = "contactText">LinkedIn: <a href = "https://www.linkedin.com/in/austin-chiang-66a45b133/" class = "contactLink" > https://www.linkedin.com/in/austin-chiang-66a45b133/</a></p>
                            </div>
                            <div>
                                <a href = "./Media/Austin_Resume.pdf" download><img src = {document} class = "icon"></img></a>   
                                <p class = "contactText">LinkedIn: <a href = "./Media/Austin_Resume.pdf" class = "contactLink"download > My Resume</a></p>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
        )
    }
}
//NEED TO LINK PROFILE PIC TO MORE ABOUT ME PAGE AND RESUME