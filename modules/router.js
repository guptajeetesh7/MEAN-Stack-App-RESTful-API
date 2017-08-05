//Import mongoose library to use MongoDB
var mongoose = require('mongoose');

//adding the middleware to parse the body
var bodyParser = require('body-parser');

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


//Assiging a variable to act as middleware
var urlencodedParser = bodyParser.urlencoded({extended: false});


//Exporting the module
module.exports = function(app){

app.use(bodyParser.json());


app.get('/',function(req,res){
	res.render('index');
});
		//IF get request is requested
	app.get('/contactList',function(req,res){
		//getting all the information from database
		Contact.find({}).then(function(result){
			console.log(result);
			res.json(result);

		});

	});

	app.post('/contactList', urlencodedParser ,function(req,res){
		console.log(req.body);
		var newContact = Contact(req.body).save().then(function(data){
			res.json({task : 'Done'});
			});

	});

	app.delete('/contactList/:id',function(req,res){
		console.log(req.params.id);
		Contact.findOneAndRemove({_id : req.params.id}).then(function(data){
			res.json({type : 'DELETE'});
		});		

	});

};
