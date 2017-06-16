module.exports = function(){
  angular.module('FourSquareApp').controller('FourSquareCtrl',
  ['$scope', 'FourSquareAppService',
  function($scope, FourSquareAppService) {
    $scope.locationString = '';

    $scope.serviceCall = function() {
      var options = {
        client_id: '30GZZNZPS1SU1Z5PWSSGTR5KCZAQJRWSIZEDDSVT0DYSDSNN',
        client_secret: 'WUJRMM100H5E2Q12TMDQSYKMMZH4TLGB5FYAQZLO5QWK2FJQ',
        v: '20170612',
        near: $scope.locationString
      };

      FourSquareAppService.callFourSquareService('getPlaces', options, $scope.getPlacesSuccess, $scope.getPlacesError);
    }

    $scope.getPlacesSuccess = function(response) {
      console.log(response);
    };

    $scope.getPlacesError = function(response) {
    };

    $scope.search = function() {
      $scope.serviceCall();
    }

  }]);
};
