/**
 * Created by pranavaswaroop on 8/05/2014.
 */

App.controller("MoviesController",function($scope, MoviesService, UserService, Favorite){
    $scope.loading = true;
    $scope.complete = false;


    $scope.$watch('chart',function(newValue){
       if(newValue){
           MoviesService.movies(newValue).then(function(movies){
               $scope.loading = false;
               $scope.complete = true;
               $scope.movies = movies;
           });
       }
    });

    $scope.chart = "most_popular";

});
