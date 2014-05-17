/**
 * Created by pranavaswaroop on 8/05/2014.
 */
'use strict';

var App = angular.module('popcornApp',['ngRoute','ngCookies','ngResource','rails']);

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
            templateUrl: '/templates/profile.html',
            resolve: {
                user:
                    function($q, $route, $location, AuthService) {
                        var d = $q.defer();

                        AuthService.currentUser().then(function(user) {
                            if(user && user.id == $route.current.params.user_id) {
                                d.resolve();
                            } else {
                                $location.path('/');
                            }
                        });
                        return d.promise;
                    }
            }
        })
        .when('/movie/:movie_id',
        {
            controller: 'MovieController',
            templateUrl: '/templates/movie.html'
        })
        .otherwise({redirectTo: '/'});

    $locationProvider.html5Mode(true);
});

App.config(function($httpProvider) {
    $httpProvider.interceptors.push('UserAuthInterceptor');
});


