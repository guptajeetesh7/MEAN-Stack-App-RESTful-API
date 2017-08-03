//Import mongoose library to use MongoDB
var mongoose = require('mongoose');

//change the Promise to global => ES6 Promise
mongoose.Promise = global.Promise;


//connect to MongoDb Locally::
mongoose.connect('mongodb://localhost/REST',{ useMongoClient: true });

// '/REST' is the database. => REST is database is the name of the database.

//checking the connection to the database
mongoose.connection.once('open',function(){
	console.log('Connection Has been made Succesfully!!');
}).on('error',function(error){
	console.log('Error to the connection :' + error);
});


//Exporting the module
module.exports = function(app){

		//IF get request is requested
	app.get('/contactList',function(req,res){

		person1 = {
			name : 'Jeetesh Gupta',
			email : 'gupta.jeetesh7@gmail.com',
			contact: '222-222-222'
		};

		

		var list = [person1];
		res.json(list);

		
	});

	app.post('/',function(rea,res){
		res.send({type:'POST'});
	});

};