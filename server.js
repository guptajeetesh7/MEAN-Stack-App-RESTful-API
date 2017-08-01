var express = require('express');

//setting up the express js
var app = express();

//use the static files
app.use(express.static(__dirname + '/public'));



app.listen(3000);
console.log('server running');