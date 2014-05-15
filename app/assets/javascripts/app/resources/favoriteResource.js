/**
 * Created by pranavaswaroop on 10/05/2014.
 */

App.factory('Favorite',
    function (railsResourceFactory) {
        var resource = railsResourceFactory({
            url: '/favorites',
            name: 'favorite'
        });

        resource.createForUserAndMovie = function(user, movie) {
            var favorite = new resource({
                user_id: user.id,
                movie_id: movie.id
            });
            return favorite.save();
        };

        resource.isFavorite = function(user,movie){
            var favorite = resource.query({
                user_id: user.id,
                movie_id: movie.id
            });

            return favorite.then(function(results){
                if(results.length > 0){
                    return true;
                }else{
                    return false;
                }
            });
        };


        resource.removeFavorite = function(user, movie) {
            var favorite = resource.query({
                user_id: user.id,
                movie_id: movie.id
            });

            return favorite.then(function(results) {
                if(results.length > 0) {
                    favorite = results[0];
                    favorite.delete();
                }
            });
        };

        return resource;
    });