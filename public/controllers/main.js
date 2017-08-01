var app = angular.module('MEAN',[]);

app.controller('main',function($scope,$http){

	//getting the data
	$http.get('/contactlist').then(function(response){
		console.log(response.data);
		$scope.contacts = response.data;
	});

});