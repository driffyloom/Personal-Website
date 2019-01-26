import React from 'react';
import ReactDOM from 'react-dom';
import posed from 'react-pose';

const Image = posed.img({
    hoverable: true,
    pressable: true,
    init: {
        scale: 1,
        boxShadow: '0px 0px 0px rgba(0,0,0,0)'
    },
    hover: {
        scale: 1.1,
        boxShadow: '0px 5px 10px rgba(0,0,0,0.2)'
    },
    press: {
        scale: .9,
        boxShadow: '0px 2px 5px rgba(0,0,0,0.1)'
    },
  });

  export default class HoverImage extends React.Component {

    handleClick(){
        const {link, imageSource, ...props } = this.props;
        window.open({link});
    }

    render() {
    
        const {link, imageSource, ...props } = this.props;


        return (
            <Image url = {link} src = {imageSource} {...props} onClick={this.handleClick}/>
        );
    }
}
