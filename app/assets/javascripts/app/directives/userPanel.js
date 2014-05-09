/**
 * Created by pranavaswaroop on 9/05/2014.
 */

App.directive('userPanel', function(){
    return {
        restrict: 'AE',
        templateUrl: "/templates/user_panel.html",
        //replace: true,
        //transclude: true
        controller: function($scope, UserService, $rootScope){
            UserService.currentUser().then(function(user){
                  $scope.currentUser = user;
            });

            $rootScope.$on('user:set',function(event, currentUser){
               $scope.currentUser = currentUser;
            });

            $scope.logout = function(){
                UserService.logout().then(function(){
                    $scope.currentUser = null;
                });
            }
        }
    };
});