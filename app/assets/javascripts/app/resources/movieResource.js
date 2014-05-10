/**
 * Created by pranavaswaroop on 10/05/2014.
 */
'use strict';

App.factory('Movie',
    function (railsResourceFactory, $q) {
        var resource =  railsResourceFactory({
            url: '/movies',
            name: 'movie'
        });

        resource.findOrCreateByYoutubeId = function(youtubeId, otherAttributes) {
            var d = $q.defer();
            resource.query({youtube_id: youtubeId})
                .then(function(movies) {
                    if(movies.length > 0) {
                        d.resolve(movies[0]); // we have the movie, return it
                    } else {
                        var createAttributes = _.extend(
                            otherAttributes,
                            {youtube_id: youtubeId}
                        );
                        var movie = new resource(createAttributes);
                        movie.save().then(function() {
                            d.resolve(movie);
                        });
                    }
                });
            return d.promise;
        };

        return resource;
    });