
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