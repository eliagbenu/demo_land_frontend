'use strict';

app.directive("showsMessageWhenHovered",function(){
	return {
	restrict: "A",// A=Attribute, C= Class Name, E=Element,M=HTML Comment
	link: function (scope,element,attributes){
		var originalMessage=scope.message;
		element.bind("mouseover",function(){
			scope.message=attributes.message;
			scope.$apply();
		});
		element.bind("mouseout",function(){
			scope.message=originalMessage;
			scope.$apply();
		});		
	}
	};
});