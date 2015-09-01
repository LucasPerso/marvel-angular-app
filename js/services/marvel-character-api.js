angular.module('MarvelApp')
  .factory('MarvelCharacters', ['$resource', function($resource){
    var apikey  = '8ee35a566b7f8c8522e9a12db77fceec';
    return $resource('http://gateway.marvel.com/v1/public/characters/:id', {'apikey': apikey} )

  }]);
