var express = require('express');

//Import Routes to the server
var routesController = require('./modules/router');

//setting up the express js
var app = express();

//use the static files
app.use(express.static(__dirname + '/public'));


//RouteS
routesController(app);


app.listen(3000);
console.log('server running');