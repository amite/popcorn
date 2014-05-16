/**
 * Created by pranavaswaroop on 9/05/2014.
 */

App.service('UserService',function($q, $cookieStore, $rootScope, $http){
    this._user = null;
    var service = this;

    this.setCurrentUser = function(user){
        service._user = user;
        $cookieStore.put('user', user);
        $rootScope.$broadcast('user:set',user);
    };

    this.signup = function(params) {
        var d = $q.defer();
        $http({
            url: '/users',
            method: 'POST',
            data: {
                user: params
            }
        }).success(function(response) {
            var user = response.data.user;
            user.auth_token = response.data.auth_token; // talk about this
            service.setCurrentUser(user);
            d.resolve(user);
        }).error(function(reason) {
            d.reject(reason);
        });
        return d.promise;
    };

//    this.login = function(){
//      var d =  $q.defer();
//      var user = {
//          email: 'stalin.pranava@gmail.com',
//          id: 1
//      };
//
//      service.setCurrentUser(user);
//      d.resolve(user);
//      return d.promise;
//    };

    this.login = function(params) {
        var d = $q.defer();
        $http({
            url: '/users/sign_in',
            method: 'POST',
            data: {
                user: params
            }
        }).success(function(response) {
            console.log(response);
            if(response.success) {
                var user = response.data.user;
                user.auth_token = response.data.auth_token; // talk about this
                service.setCurrentUser(user);
                d.resolve(user);
            } else {
                d.reject(response)
            }
        }).error(function(reason) {
            d.reject(reason);
        });
        return d.promise;
    };

    this.logout = function(){
        var d = $q.defer();
        service._user = null;
        d.resolve();
        $cookieStore.remove('user');
        $rootScope.$broadcast('user:unset');
        return d.promise;
    };

    this.currentUser = function(){
        var d = $q.defer();
        if(service._user){
            d.resolve(service._user);
        }else if($cookieStore.get('user')){
            service._user = $cookieStore.get('user');
            $rootScope.$broadcast('user:set',service._user);
            d.resolve(service._user);
        }else{
            d.resolve(service._user);
        }

        return d.promise;
    };
});