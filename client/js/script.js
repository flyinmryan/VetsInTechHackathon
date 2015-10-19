var myApp = angular.module('myApp', ['ngRoute']);

//ROUTING
myApp.config(function ($routeProvider){
	$routeProvider
	.when('/', {templateUrl: './partials/home.html'})
	.when('/dashboard', {templateUrl: './partials/dashboard.html'})
	.otherwise({redirectTo: '/'});
});

//CREATE USER CONTROLLER
myApp.controller('UsersController', function ($scope, $location, $routeParams, UsersFactory){
	$scope.loginUser = function (){
		var userPack = { name: $scope.new_user.name };
		console.log(userPack);
		UsersFactory.login_user(userPack, function (data){
			$scope.users = data;
			$location.path("/dashboard");
		});
	};
});

//CREATE USER FACTORY
myApp.factory('UsersFactory', function ($http){
	var factory = {};
	factory.login_user = function (info, callback){
		$http.post('/signIn', info).success(function (output){
			callback(output);
		});
	};
	return factory;
});

$(document).ready(function(){
});