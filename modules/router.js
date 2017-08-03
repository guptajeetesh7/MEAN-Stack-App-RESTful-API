//Import mongoose library to use MongoDB
var mongoose = require('mongoose');

//change the Promise to global => ES6 Promise
mongoose.Promise = global.Promise;

//requring the Model 
const Contact = require('../Schema/Schema');


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
		//getting all the information from database
		Contact.find({}).then(function(result){
			console.log(result);
			res.json(result);
		});

	});

	app.post('/',function(rea,res){
		res.send({type:'POST'});
	});

};


// var person1 = new Contact({
// 			name : 'Jeetesh Gupta',
// 			email : 'gupta.jeetesh7@gmail.com',
// 			contact: 01475233132
// 		});

// 		person1.save().then(function(){
// 			console.log('Oh Yeah');
// 		});