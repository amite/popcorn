/**
 * Created by pranavaswaroop on 8/05/2014.
 */

App.controller("MoviesController",function($scope, MoviesService, UserService, Favorite){
    $scope.loading = true;
    $scope.complete = false;
    MoviesService.movies().then(function(movies){
        $scope.loading = false;
        $scope.complete = true;
        $scope.movies = movies;
    });


    $scope.addFavorite = function(movie) {
        UserService.currentUser().then(function(user) {
            Favorite.createForUserAndMovie(user, movie).then(function() {
                movie.isFavorite = true;
            });
        });
    };

    $scope.removeFavorite = function(movie) {
        UserService.currentUser().then(function(user) {
            Favorite.removeFavorite(user, movie).then(function() {
                movie.isFavorite = false;
            });
        });
    };
});
