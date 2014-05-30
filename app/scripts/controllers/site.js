'use strict';

app.controller('SiteCtrl',['$scope','Authentication','$location','expiry',function($scope,Authentication,$location,expiry){

	$scope.message = "Hover over image to see message";
	$scope.expiry = expiry.data;

	$scope.logout = function(){
		Authentication.logout().success(function(){
			$location.path('/');
		});
	};

}]);