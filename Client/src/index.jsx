//where you start creating react components\
import React from "react"

//creates a react div
export default class ReactHeader extends React.Component{
    constructor(props){
        super(props)
        //states any state (for things like clicked info inside etc. 
        //anything dynamic)
        this.state = {

        }
    }
    //initial stage that starts everything
    componentDidMount(){}

    //helper functions below

    //render for showing up on the page
    render(){
        return(
            <div>
                <h1>Welcome to Austin's homepage</h1>
                <p>TESTING YO</p>
            </div>
        )
    }
}