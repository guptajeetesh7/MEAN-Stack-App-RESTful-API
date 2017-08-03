
const assert = require('assert');
const Contact = require('../Schema/Schema');
//describe tests
describe('Deleting Records' ,function(){

  var contact;

  beforeEach(function(done){
    //new contact
      contact = new Contact ({
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
  it('Delete one record From Database',function(done){
    //new char
    Contact.findOneAndRemove({name : 'Jeetesh'}).then(function(result){
      Contact.findOne({name :'Jeetesh'}).then(function(result){
        assert(result === null);
        done();
      });
    });

  });



});
