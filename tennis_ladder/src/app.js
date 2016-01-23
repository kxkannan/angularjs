
var ladderApp = angular.module("ladderApp", ['ngResource', 'ui.router']);

//ROUTES
ladderApp.config(function($stateProvider, $urlRouterProvider){
    
    $urlRouterProvider.otherwise("/home");
   
    $stateProvider
    
      .state('login', {
         url: '/login',
         templateUrl: 'login.html',
         controller:  'loginController'
       })
    
      .state('home', {
          url: '/home',
          templateUrl: 'home/index.html',
          controller: 'homeController'
       })
    
      .state('student', {
             url: '/student',
             templateUrl: 'student/index.html',
             controller: 'studentController'
       })
    
       .state('coach', {
             url: '/coach',
             templateUrl: 'coach/index.html',
             controller: 'coachController'
       })
    
});

// SERVICES

ladderApp.service('cityService', function(){
    
    this.city = "New York, NY";
    
})


