'use strict';

app.controller('LoginCtrl',['$scope','Authentication', '$location',function($scope,Authentication,$location){

	$scope.credentials = { username:"", password:"" };

	$scope.login = function(){
		Authentication.login($scope.credentials).success(function(){
		 $location.path("/home");
		});
	}
}]);