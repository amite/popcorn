/**
 * Created by pranavaswaroop on 9/05/2014.
 */

'use strict';

App.controller("ProfileController",function($scope, $location, UserService){
  UserService.currentUser().then(function(user){
     $scope.user = user;
  });
});