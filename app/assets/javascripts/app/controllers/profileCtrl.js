/**
 * Created by pranavaswaroop on 9/05/2014.
 */

'use strict';

App.controller("ProfileController",function($scope, $location, UserService, $routeParams,User){
    User.query({id: $routeParams.user_id})
        .then(function(users) {
            if(users.length > 0) {
                $scope.user = users[0];
                $scope.user.favoriteMovies()
                    .then(function(movies) {
                        $scope.favoriteMovies = movies;
                    });
            }
        });
});