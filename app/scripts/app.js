'use strict';

var app = angular
  .module('demoLandFrontendApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })      
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'SiteCtrl'
      })            
      .otherwise({
        redirectTo: '/'
      });
  });
