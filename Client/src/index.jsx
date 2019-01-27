//where you start creating react components\
import React from "react";
import beach from "./Media/Beach.jpg";
import './CSS/index.css';
import ReactRotatingText from "react-rotating-text";
import Projects from "./project.jsx";
import Contact from "./contact.jsx";
//creates a react div



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
                <h1 id = "name">Austin Chiang</h1>
                <p id = "title"> Hi there! I'm a Software 
                Engineer based in Orange County, California. I have a passion for 
                Software Development and a love for 
                <ReactRotatingText items = {[" C++!", " Java!", " making things!", " F45!", " music!"]} typingInterval = "100" deletingInvterval = "100" id = "lovesRotating"/> </p>
                <img src={beach} alt="beach" id = "beachPicture"></img>
            </div>
            
        )
    }
}


