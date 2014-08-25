//'use strict';

app.controller('loginCtrl', ['$scope','loginService', function ($scope,loginService) {
	$scope.page='login';
	$scope.login=function(data){
		loginService.login(data,$scope); //call login service
	};
}]);