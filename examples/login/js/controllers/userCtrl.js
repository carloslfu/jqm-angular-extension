//'use strict';

app.controller('userCtrl', ['$scope','loginService', function($scope,loginService){
    $scope.page='user';
    $scope.isLogged="true";
	$scope.logout=function(){
        loginService.logout();
	}
}])