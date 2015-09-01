angular.module('MarvelApp', ['ngResource', 'ngRoute', 'ui.bootstrap'])
  .config(['$locationProvider', '$routeProvider', '$httpProvider', function($locationProvider, $routeProvider, $httpProvider) {

    // Put your API key
    window.MarvelApiKey = 'yourPublicKeyHere';

    $locationProvider.html5Mode(true);
    $httpProvider.interceptors.push('httpInterceptor');
    $routeProvider
    .when('/', {
      templateUrl: 'js/views/home/index.html'
    })
    .when('/comics', {
      templateUrl: 'js/views/comic/index.html',
      controller: 'ComicController',
      controllerAs: 'comicCtrl'
    })
    .when('/comic/:id', {
      templateUrl: 'js/views/comic/single.html',
      controller: 'ComicController',
      controllerAs: 'comicCtrl'
    })
    .when('/creators', {
      templateUrl: 'js/views/creator/index.html',
      controller: 'CreatorController',
      controllerAs: 'creatorCtrl'
    })
    .when('/creator/:id', {
      templateUrl: 'js/views/creator/single.html',
      controller: 'CreatorController',
      controllerAs: 'creatorCtrl'
    })
    .otherwise({redirectTo: '/'});
  }]);
