var app = angular
  .module("myModule", ["ngRoute"])
  .config(function ($routeProvider, $locationProvider) { //inject $locationProvider service
    $locationProvider.hashPrefix(''); // add configuration
    $routeProvider
      .when("/", {
        templateUrl: "views/home.html",
        controller: "homeCtrl"
      })
      .when("/home", {
        templateUrl: "views/home.html",
        controller: "homeCtrl"
      })
      .when("/contact", {
        templateUrl: "views/contact.html",
        controller: "contactCtrl"
      })
      .when("/technologies", {
        templateUrl: "views/technologies.html",
        controller: "technologiesCtrl"
      })
      .otherwise({
        redirectTo: '/'
      });
  });