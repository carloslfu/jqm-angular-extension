app.controller('aboutCtrl', ['$scope','$rootScope','loginService', function($scope,$rootScope,loginService){
    $scope.page='about';
    $scope.isLogged=$rootScope.isLogged;
	$scope.logout=function(){
        loginService.logout();
	}
}])