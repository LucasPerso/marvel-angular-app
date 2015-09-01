angular.module('MarvelApp')
  .factory('MarvelCreators', ['$resource', function($resource){
    return {
      letter: undefined,
      values: [],
      creators: $resource('http://gateway.marvel.com/v1/public/creators/:id', {'apikey': MarvelApiKey} ),
      comicsByCreator : $resource('http://gateway.marvel.com/v1/public/creators/:id/comics', {'apikey': MarvelApiKey} )
    };

  }]);
