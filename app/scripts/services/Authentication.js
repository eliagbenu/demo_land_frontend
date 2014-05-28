'use strict';

app.factory('Authentication',['$location',function($location){
	return {
		login:function(credentials){

			if(credentials.email==="eli@gmail.com" && credentials.password==="123"){
				console.log("xxxx");
				$location.path("/home");			
			 }
		},
		logout:function(){
		$location.path("/login");
		}

	}
}]);