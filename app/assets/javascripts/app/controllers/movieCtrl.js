/**
 * Created by pranavaswaroop on 8/05/2014.
 */

App.controller("MovieController", function($scope, MoviesService, $routeParams, $sce){
    console.log("Single Movie is getting booted");
    $scope.movies = MoviesService.movies();
    console.log( $routeParams.movie_id);
    // Regular Javascript utility
//    for(var i=0;i < movies.length; i++){
//        console.log(movies[i].youtubeId )
//        if (movies[i].youtubeId === $routeParams.movie_id){
//            $scope.movie = movies[i];
//        }
//    }

    // Using Underscore library
    $scope.movie = _.find($scope.movies,function(v){
        return v.youtubeId ===  $routeParams.movie_id;
    });

    $scope.movie.youtubeUrl = $sce.trustAsResourceUrl("https://www.youtube.com/embed/"+ $scope.movie.youtubeId + "?rel=0");
});
