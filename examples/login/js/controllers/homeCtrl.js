app.controller('homeCtrl', ['$scope','$rootScope','loginService', function($scope,$rootScope,loginService){
    $scope.page='home';
    $scope.isLogged=$rootScope.isLogged;
	$scope.logout=function(){
        loginService.logout();
	}
}])