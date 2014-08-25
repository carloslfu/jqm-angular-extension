//'use strict';

var appserver = "http://loginjqmangular.appspot.com";

var app = angular.module('loginjqmangular',['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {templateUrl: 'views/login.html', controller: 'loginCtrl'});
  $routeProvider.when('/user', {templateUrl: 'views/user.html', controller: 'userCtrl'});
  $routeProvider.when('/home', {templateUrl: 'views/home.html', controller: 'homeCtrl'});
  $routeProvider.when('/about', {templateUrl: 'views/about.html', controller: 'aboutCtrl'});
  $routeProvider.otherwise( {redirectTo: '/login'});
}]);


app.run(function($rootScope,$location, loginService){
	var routespermission = ['/user'];  //route that require login
    $rootScope.isLogged = false;
	$rootScope.$on('$locationChangeStart', function(event, next, current){
	  //locationChangeStart because routeChangeStart don't eval event.preventDefault() function
		if($rootScope.isLogged==false)
		{
            if( routespermission.indexOf($location.path()) !=-1)
            {
                //prevent redirect before check
                event.preventDefault();
                var connected=loginService.islogged();
                connected.success(function(msg){
                    if(msg.msg=="deauth") 
                    {
                        $rootScope.isLogged=false;
                        $location.path('/login');
                    }
                    else if(msg.msg=="auth")
                    {
                        $rootScope.isLogged=true;
                        $location.path('/user');
                    }
                    //redirect after check
                    $rootScope.$emit('$locationChangeSuccess');
                });
            }
        }
	});
});


