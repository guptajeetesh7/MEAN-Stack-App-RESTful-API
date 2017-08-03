
const assert = require('assert');
const Contact = require('../Schema/Schema');
//describe tests
describe('Finding Records' ,function(){

  var contact;

  beforeEach(function(done){
    //new char
     contact = new Contact({
      name : 'Jeetesh',
      email : 'gupta.jeetesh7@gmail.com',
      contact : 233132
    });

    contact.save().then(function(){
      assert(contact.isNew === false );
      done();
    });

  });

  //Create tests
  it('Find one record from database by name',function(done){
    //new char
    Contact.findOne({name : 'Jeetesh'}).then(function(result){
      assert(result.name === 'Jeetesh');
      done();
    });

  });

  // it('Find one record from database by ID',function(done){
  //   //new char
  //   Contact.findOne({_id : char._id }).then(function(result){
  //     assert(result._id.toString === char._id.toString);
  //     done();
  //   });

  // });



});
