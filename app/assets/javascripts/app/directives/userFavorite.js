/**
 * Created by pranavaswaroop on 15/05/2014.
 */

App.directive('userFavorite', function(UserService,Favorite) {
    return {
        restrict: 'AEC',
        templateUrl: "/templates/user_favorite.html",
        link: function($scope) {

            $scope.$on('user:unset',function(){
                $scope.currentUser = null;
            });

            $scope.$watch('ngMovie', function(newValue, oldValue) {
                if(newValue) {
                    UserService.currentUser().then(function(user) {
                        if(user) {
                            $scope.currentUser = user;
                            Favorite.isFavorite(user, $scope.ngMovie).then(
                                function(isFavorite) {
                                    $scope.isFavorite = isFavorite;
                                });
                        } else {
                            $scope.isFavorite = false;
                        }
                    });
                }
            });

            $scope.addFavorite = function(movie) {
                UserService.currentUser().then(function(user) {
                    Favorite.createForUserAndMovie(user, movie).then(function() {
                        $scope.isFavorite = true;
                    });
                });
            };

            $scope.removeFavorite = function(movie) {
                UserService.currentUser().then(function(user) {
                    Favorite.removeFavorite(user, movie).then(function() {
                        $scope.isFavorite = false;
                    });
                });
            };
        },
        scope:{
            ngMovie: "="
        }
    };
});