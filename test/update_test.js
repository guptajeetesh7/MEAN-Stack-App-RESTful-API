
const assert = require('assert');

const Contact = require('../Schema/Schema');
//describe tests
describe('Updating Records' ,function(){

  var contact;

  beforeEach(function(done){
    //new contact
      contact = new Contact({
      name : 'Jeetesh',
      email: 'gupta.jeetesh7@gmail.com',
      contact: ' 01475233132'
      
    });

    contact.save().then(function(){
      done();
    });

  });

  //Create tests
  it('Update one record in Database',function(done){
    //new char
    Contact.findOneAndUpdate({name : 'Jeetesh'},{name : 'Asati'}).then(function(result){
      Contact.findOne({_id :contact._id}).then(function(result){
        assert(result.name === 'Asati');
        done();
      });
    });

  });


  // it('Increment the weight by 1',function(done){
  //   //new char
  //   Mariochar.update({} ,{$inc : {weight : 1} }).then(function(){
  //       Mariochar.findOne({name : 'Mario'}).then(function(record){
  //         assert(record.weight === 21);
  //         done();
  //       });
  //     });
  //   });



});
