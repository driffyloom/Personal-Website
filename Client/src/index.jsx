//where you start creating react components\
import React from "react";
import beach from "./Beach.jpg";
import './index.css';

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
                Engineer based in Orange County. I love music, socializing, F45, and making things! </p>
                <div id="background">
                    <img src={beach} alt="beach" id = "forestPicture"></img>
                </div>
            </div>
        )
    }
}
