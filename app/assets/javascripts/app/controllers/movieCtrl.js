/**
 * Created by pranavaswaroop on 8/05/2014.
 */

App.controller("MovieController", function($scope, MoviesService,Movie, $routeParams, $sce){

//    MoviesService.movies().then(function(movies){
//        $scope.movies = movies;
//
//        // Using Underscore library
//        $scope.movie = _.find($scope.movies,function(v){
//            return v.youtubeId ===  $routeParams.movie_id;
//        });
//        console.log($scope.movie);
//        $scope.movie.youtubeUrl = $sce.trustAsResourceUrl("https://www.youtube.com/embed/"+ $scope.movie.youtubeId + "?rel=0");
//
//    });

    Movie.query({youtube_id: $routeParams.movie_id}).then(function(movies) {
        if(movies.length > 0) {
            var movie = movies[0];
            movie.youtubeUrl = $sce.trustAsResourceUrl("http://www.youtube.com/embed/" + movie.youtubeId + "?rel=0");
            $scope.movie = movie;
        }
    });
});
