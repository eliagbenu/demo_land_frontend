'use strict';

app.factory('Authentication',['$http','BACKEND_URL','SessionService','FlashService', function($http,BACKEND_URL,SessionService,FlashService){

	var cacheSession = function(){
		SessionService.set('authenticated',true);
	};
	var uncacheSession = function(){
		SessionService.unset('authenticated',false);		
	};
	
	var loginError = function(response){
		FlashService.show(response.flash);
	};
	
	return {
		login:function(credentials){
			var login = $http.post(BACKEND_URL+"/auth/login",credentials);
		    login.success(cacheSession);
		    login.success(FlashService.clear);
		    login.error(loginError);
		    return login;
		},
		logout:function(){
			var logout = $http.get(BACKEND_URL+"/auth/logout");
			 logout.success(uncacheSession);
			 return logout;
		},
		isLoggedIn:function(){
			return SessionService.get("authenticated");
		}
	};
}]);