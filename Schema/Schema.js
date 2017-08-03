//Use mongoose library
const mongoose = require('mongoose');

//use schema to make collections
const Schema = mongoose.Schema;

//create the Schema of the collection
const contactSchema = new Schema({
	//feilds in the collections
	name : String,
	email : String,
	contact: Number

});

//creating the model
var contact = mongoose.model('contact',contactSchema);

//exporting the model
module.exports = contact;