var express = require('express');

var path = require('path');

//Import Routes to the server
var routesController = require('./modules/router');

//setting up the express js
var app = express();


//use the static files
app.use(express.static('./public/controllers'));

//setting the view engine
app.set('view engine','ejs');



//RouteS
routesController(app);


app.listen(4000);
console.log('server running');
