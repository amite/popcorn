/**
 * Created by pranavaswaroop on 8/05/2014.
 */

App.controller("MovieController", function($scope, MoviesService, $routeParams, $sce){

    MoviesService.movies().then(function(movies){
        $scope.movies = movies;

        // Using Underscore library
        $scope.movie = _.find($scope.movies,function(v){
            return v.youtubeId ===  $routeParams.movie_id;
        });
        console.log($scope.movie);
        $scope.movie.youtubeUrl = $sce.trustAsResourceUrl("https://www.youtube.com/embed/"+ $scope.movie.youtubeId + "?rel=0");

    });
});
