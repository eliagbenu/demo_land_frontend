'use strict';

app.controller('SiteCtrl',['$scope','Authentication',function($scope,Authentication){

	$scope.message = "Hover over image to see message";

	$scope.logout = function(){
		Authentication.logout();
	};

}]);