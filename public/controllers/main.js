var app = angular.module('MEAN',[]);

app.controller('main',function($scope,$http){

	//getting the data
	$http.get('/contactList').then(function(response){
		console.log(response.data);
		$scope.contacts = response.data;
	});


	$scope.Add = function(){
		if($scope.name!=undefined && $scope.email!=undefined && $scope.contact!=undefined){
			
		}else{
			alert("Please fill all feilds");
		}
	};
});