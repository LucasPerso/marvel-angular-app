angular.module('MarvelApp')
  .factory('MarvelComics', ['$resource', function($resource){

    return {
      letter : undefined,
      values : [], // sharing data between controllers
      comics : $resource('http://gateway.marvel.com/v1/public/comics/:id', {'apikey': MarvelApiKey} ),
      creatorsByComic : $resource('http://gateway.marvel.com/v1/public/comics/:id/creators', {'apikey': MarvelApiKey} )
    };
}]);
