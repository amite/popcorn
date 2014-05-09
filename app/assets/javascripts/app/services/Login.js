/**
 * Created by pranavaswaroop on 9/05/2014.
 */

App.service('UserService',function($q, $cookieStore, $rootScope){
    this._user = null;
    var service = this;

    this.login = function(){
      var d =  $q.defer();
      var user = {
          email: 'stalin.pranava@gmail.com',
          id: 1
      };

      service._user = user;
      $cookieStore.put('user', user);
      $rootScope.$broadcast('user:set',user);
      d.resolve(user);
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