const mongoose = require('mongoose');

const assert = require('assert');


//ES6 Promise
mongoose.Promise = global.Promise;

//connect to database before tests
before(function(done){
  //Connect to mongodb
  mongoose.connect('mongodb://localhost/REST',{ useMongoClient: true });

  mongoose.connection.once('open',function(){
    console.log('Connection Has been made !!');
    done();
  }).on('error',function(error){
    console.log('Connection to Database has Error :' + error);
  });

});

//Drop database before each tests
beforeEach(function(done){
  //Drop collection
    mongoose.connection.collections.contacts.drop(function(){
      
      done();

    });
});
