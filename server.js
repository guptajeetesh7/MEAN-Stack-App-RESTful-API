var express = require('express');

//setting up the express js
var app = express();

//use the static files
app.use(express.static(__dirname + '/public'));


//IF get request is requested
app.get('/contactlist',function(req,res){

	person1 = {
		name : 'Jeetesh Gupta',
		email : 'gupta.jeetesh7@gmail.com',
		contact: '222-222-222'
	};

	person2 = {
		name : 'Aneesh Jain',
		email : 'Charus@gmail.com',
		contact: '1111-111-111'
	};

	var list = [person1,person2];
	res.json(list);
});



app.listen(3000);
console.log('server running');