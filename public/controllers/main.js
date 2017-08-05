var app = angular.module('MEAN',['ngRoute']);

app.controller('main',function($scope,$http,$route){

	//getting the data
	$http.get('/contactList').then(function(response){
				$scope.contactList = response.data;
				console.log(response.data);
	});

	$scope.Add = function(){
		if($scope.name!=undefined && $scope.email!=undefined && $scope.number!=undefined){
			$http.post('/contactList',{name : $scope.name , email : $scope.email , contact : $scope.number}).then(function(response){
				alert("Added");
				$scope.name = undefined;
				$scope.email = undefined;
				$scope.number = undefined;

				});
		}else{
			alert("Please fill all feilds");
		}
	};


});
