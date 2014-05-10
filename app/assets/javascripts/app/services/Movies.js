/**
 * Created by pranavaswaroop on 8/05/2014.
 */

App.service('MoviesService',function($http, $q){
    this.movies = function(){
       var d = $q.defer();
       $http({
           method: 'GET',
           url: 'http://gdata.youtube.com/feeds/api/charts/movies/most_popular?' +
               'v=2&max-results=20&paid-content=true&hl=en&region=au&alt=json'

       }).then(function(response){
           var movies = _.map(response.data.feed.entry,function(movie){
                return {
                    youtubeId: movie['media$group']['yt$videoid']['$t'],
                    title: movie['media$group']['media$title']['$t'],
                    released: movie['yt$firstReleased']['$t'].match(/\d{4}/)[0],
                    rated: movie['media$group']['media$rating'][0]['$t'],
                    runningTime: Math.round(movie['media$group']['yt$duration']['seconds'] / 60),
                    posterUrl: _.findWhere(movie['media$group']['media$thumbnail'], {"yt$name": "poster"}).url,
                    description: movie['media$group']['media$description']['$t']
                };
           });
           console.log(movies);
           d.resolve(movies);
       },function(error){
           d.reject(error);
       });

       return d.promise;
    }

});