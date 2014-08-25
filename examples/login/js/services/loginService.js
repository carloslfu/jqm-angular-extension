
app.factory('loginService',function($http,$rootScope, $location, sessionService){
	return{
		login:function(data,scope){
			//var resp=$.post(appserver+'/login',data); //send data to user.php
            $.getJSON(appserver+'/login?callback=?',data,function(msg){//jsonp for cors
                            if(msg.uid!=";)"){
                                $rootScope.isLogged=true;
                                scope.isLogged="true";
                                sessionService.set('uid',msg.uid);
                                $location.path('/user');
                            }	       
                            else  {
                                $location.path('/login');
                                scope.isLogged="false";
                            }
                            $rootScope.$apply();
                        });
		},
		logout:function(){
			sessionService.destroy('uid');
            $rootScope.isLogged = false;
			$location.path('/login');
		},
		islogged:function(){
			return $.getJSON(appserver+'/check?callback=?',{key: sessionService.get('uid')});
		}
	}

});