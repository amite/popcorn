/**
 * Created by pranavaswaroop on 9/05/2014.
 */

'use strict';

App.controller('LoginController',function($scope, $location, UserService){
    $scope.login = {}
    $scope.signup = {}

    UserService.currentUser().then(function(user){
       $scope.user = user;
    });

    $scope.submitSignup = function(){
        UserService.signup($scope.signup).then(
            function(user) {
                $location.path("/");
            },
            function (reason) {
                $scope.signup.errors = reason;
            });
    };

    $scope.submitLogin = function(){
        UserService.login($scope.login).then(
            function(user) {
                $location.path("/");
            },
            function (reason) {
                $scope.login.errors = reason;
            });
    };
});