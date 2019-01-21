const express = require("express");
const bodyParser = require("body-parser");

let app = express();

app.use(bodyParser.json());

//this use is for locating where your html files are to use express on
app.use('/',express.static("./Client/dist"));

//if you get anything from port 8080 post working in log
app.listen(8081,console.log("WORKING"));

