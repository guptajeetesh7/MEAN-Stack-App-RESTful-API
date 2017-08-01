var express = require('express');
var app = express();

app.get('/',function(req,res){
	res.send('Hello world from server.js');
});

app.listen(3000);
console.log('server running');