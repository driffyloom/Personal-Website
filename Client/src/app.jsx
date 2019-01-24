import React from "react";
// only for rendering
import ReactDOM from "react-dom";
import ReactHeader from "./index.jsx";


// function to render react component put them in here to use
// means I'm gonna render header with reactHeader in the html
// Header is the name of the render

ReactDOM.render(<ReactHeader />,document.getElementById('titlePage'));