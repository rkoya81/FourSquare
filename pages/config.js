module.exports = function(){
  angular.module('FourSquareApp').config(
  ['$routeProvider',
  function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl : './pages/results.html',
        controller  : 'FourSquareCtrl'
    })

    $routeProvider.when('/details', {
        templateUrl : './pages/details.html',
        controller  : 'FourSquareDetailsCtrl'
    })
  }
])};
