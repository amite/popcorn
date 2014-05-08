/**
 * Created by pranavaswaroop on 8/05/2014.
 */

App.controller("MoviesController",function($scope, MoviesService){

    $scope.movies = MoviesService.movies();
    $scope.addFavorite = function(movie){
        movie.isFavorite = true;
    };

    $scope.removeFavorite = function(movie){
        movie.isFavorite = false;
    };
});
