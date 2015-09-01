angular.module('MarvelApp')
  .directive('searchAlphabet', function() {
    return {
      restrict: 'E',
      templateUrl: 'js/views/directives/search-alphabet.html',
      scope: {
        'attr' : '@'
      },
      controller: 'SearchController',
      controllerAs: 'searchCtrl'
    };
  });
