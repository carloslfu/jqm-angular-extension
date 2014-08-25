app.controller('aboutCtrl', ['$scope','$rootScope','loginService', function($scope,$rootScope){
    $scope.page='about';
    $scope.isLogged=$rootScope.isLogged;
	$scope.logout=function(){
        loginService.logout();
	}
}])