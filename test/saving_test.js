
const assert = require('assert');

const Contact = require('../Schema/Schema');
//describe tests
describe('Saving Records' ,function(){
  //Create tests
  it('Saves data to database',function(done){
    //new char
      var contact = new Contact({
      name : 'Jeetesh',
      email : 'gupta.jeetesh7@gmail.com',
      
    });


    contact.save().then(function(){
      assert(contact.isNew === false );
      done();
    });

  });



});
