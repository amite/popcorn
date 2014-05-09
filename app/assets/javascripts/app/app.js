/**
 * Created by pranavaswaroop on 8/05/2014.
 */
'use strict';

var App = angular.module('popcornApp',['ngRoute','ngCookies']);

App.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/',
        {
            controller: 'MoviesController',
            templateUrl: '/templates/movies.html'
        })
        .when('/login',
        {
            controller: 'LoginController',
            templateUrl: '/templates/login.html'
        })
        .when('/user/:user_id',
        {
            controller: 'ProfileController',
            templateUrl: '/templates/profile.html'
        })
        .when('/movie/:movie_id',
        {
            controller: 'MovieController',
            templateUrl: '/templates/movie.html'
        })
        .otherwise({redirectTo: '/'});

    $locationProvider.html5Mode(true);
});


