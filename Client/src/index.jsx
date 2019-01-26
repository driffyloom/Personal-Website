//where you start creating react components\
import React from "react";
import beach from "./Media/Beach.jpg";
import './CSS/index.css';
import ReactRotatingText from "react-rotating-text";
//creates a react div



export default class ReactHeader extends React.Component{
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
                <p id = "title"> Hi There! My name is Austin Chiang and I'm a Software 
                Engineer based in Orange County, California. I have a huge passion for 
                Software Development and a love for 
                <ReactRotatingText items = {[" music!", " socializing!", " F45!", " making things!"]} typingInterval = "100" deletingInvterval = "100" id = "lovesRotating"/> </p>
                <div id="background">
                    <img src={beach} alt="beach" id = "beachPicture"></img>
                </div>
            </div>
        )
    }
}
