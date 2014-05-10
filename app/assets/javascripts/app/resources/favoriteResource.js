/**
 * Created by pranavaswaroop on 10/05/2014.
 */

App.factory('Favorite',
    function (railsResourceFactory) {
        return railsResourceFactory({
            url: '/favorites',
            name: 'favorite'});
    });