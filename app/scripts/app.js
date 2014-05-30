'use strict';

var app = angular
  .module('demoLandFrontendApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ]);
  
app.constant('BACKEND_URL' ,'http://127.0.0.1:8000');  
 
  
app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })      
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'SiteCtrl',
        resolve:{
        	"expiry":function($http){
        		return $http.get("http://127.0.0.1:8000/expiry");
        	}
        }
      })            
      .otherwise({
        redirectTo: '/'
      });
  });
  
app.config(function($httpProvider){
	var logsOutUserOn401 = function($location,$q,SessionService,FlashService){
		
	var success=function(response){
		return response;
	};	
	var error=function(response){
		if(response.status===401){ //HTTP NotAuthorized
			SessionService.unset("authenticated");
			FlashService.show(response.data.flash);
			$location.path("/login");
			return $q.reject(response);			
		}else{
			return $q.reject(response);
		}
	};
	return function(promise){
		return promise.then(success,error);
	};
	};
});


app.run(function($rootScope,$location,Authentication,FlashService){

	var routesThatRequireAuth = ['/home'];

	$rootScope.$on('$routeChangeStart',function(event,next,current){
		if(_(routesThatRequireAuth).contains($location.path()) && !Authentication.isLoggedIn()) {
			$location.path("/login");
			FlashService.show("Please login to continue");
		}
	});
});


