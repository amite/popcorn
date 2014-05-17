/**
 * Created by pranavaswaroop on 16/05/2014.
 */

'use strict';

App.factory('User',
    ['$q', 'railsResourceFactory', 'Movie', 'Favorite',
        function ($q, railsResourceFactory, Movie, Favorite) {
            var resource = railsResourceFactory({
                url: '/users',
                name: 'user'
        });


    resource.prototype.favoriteMovies = function() {
        var self = this;
        return resource
            .$get(self.$url('movies'))
            .then(function (movies) {
                self.favoriteMovies = movies;
                return self.favoriteMovies;
            });
    };
    return resource;
 }]);