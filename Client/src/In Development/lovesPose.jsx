import React from "react";
import ReactDOM from "react-dom";
import posed from "react-pose";
import PoseGroup from "react-pose";

const Item = posed.li({});

export default class FlipBox extends React.Component {
  constructor(props){
    super(props)
    
    this.state = {
      loves: [0, 1, 2, 3]
    }
  }

  componentDidMount() {
    this.interval = setInterval(this.toggleVisibility, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleVisibility (){
    this.setState({ loves: shuffle(this.state.loves) }) 
  }

  render() {
    return (
      <ul className="sidepanel">
        <PoseGroup>
          {this.state.loves.map(item => (
            <Item className="loves" data-key={item} key={item} />
          ))}
        </PoseGroup>
      </ul>
    );
  }
}

function shuffle(shuffleArray) {
  var swapValue;
  var randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * (shuffleArray.length-1))+1;
    //swap to top always
    swapValue = array[0];
    array[0] = array[randomIndex];
    array[randomIndex] = swapValue;
  }

  return shuffleArray;
}