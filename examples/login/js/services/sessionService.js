//'use strict';

app.factory('sessionService', ['$http', function($http){
	return{
		set:function(key,value){
			return sessionStorage.setItem(key,value);
		},
		get:function(key){
			return sessionStorage.getItem(key);
		},
		destroy:function(key){
			$.getJSON(appserver+'/destroy_session?callback=?',{uid:'uid1234'});
			return sessionStorage.removeItem(key);
		}
	};
}])