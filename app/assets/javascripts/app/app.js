/**
 * Created by pranavaswaroop on 8/05/2014.
 */
'use strict';

var App = angular.module('popcornApp',['ngRoute']);

App.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/',
        {
            controller: 'MoviesController',
            templateUrl: '/templates/movies.html'
        })
        .when('/movie/:movie_id',
        {
            controller: 'MovieController',
            templateUrl: '/templates/movie.html'
        })
        .otherwise({redirectTo: '/'});

    $locationProvider.html5Mode(true);
});


