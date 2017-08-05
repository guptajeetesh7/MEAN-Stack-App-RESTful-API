var app = angular.module('MEAN',['ngRoute']);

app.controller('main',function($scope,$http,$route){


var show = function(){
	$http.get('/contactList').then(function(response){
				$scope.contactList = response.data;
				console.log(response.data);
	});
};
	//getting the data
show();

	$scope.Add = function(){
		if($scope.name!=undefined && $scope.email!=undefined && $scope.number!=undefined){
			$http.post('/contactList',{name : $scope.name , email : $scope.email , contact : $scope.number}).then(function(response){
				alert("Added");
				$scope.name = undefined;
				$scope.email = undefined;
				$scope.number = undefined;
				show();
				});
		}else{
			alert("Please fill all feilds");
		}
	};

	$scope.Delete = function(id){
		$http.delete('/contactList/' + id).then(function(response){
			alert("Deleted");
			show();
		});
		
	}


});
