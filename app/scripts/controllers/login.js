'use strict';

app.controller('LoginCtrl',['$scope','Authentication',function($scope,Authentication){

	$scope.credentials = { username:"", password:"" };

	$scope.login = function(){
		Authentication.login($scope.credentials);
	}

}]);