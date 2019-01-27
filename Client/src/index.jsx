//where you start creating react components\
import React from "react";
import beach from "./Media/Beach.jpg";
import './CSS/index.css';
import ReactRotatingText from "react-rotating-text";
import face from "./Media/Face.jpg";
//creates a react div



export default class Title extends React.Component{
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
                <div id = "headerFlexBox">
                    <div id = "textBox">
                        <h1 id = "name">I'm Austin Chiang.</h1>
                        <p id = "title"> I'm a Software Engineer specializing in
                        <p id = "boldTitle">
                        <ReactRotatingText items = {[" C++.", " Java.", " making things.", " SQL.", " React."]} 
                        typingInterval = "100" deletingInvterval = "100" id = "lovesRotating"/> </p></p>
                    </div>
                    <div>
                        <img src={face} alt="face" id = "profilePicture"></img>
                    </div>
                </div>            
            </div>
        )
    }
}


//<img src={beach} alt="beach" id = "beachPicture"></img>