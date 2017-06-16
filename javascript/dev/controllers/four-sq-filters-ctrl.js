module.exports = function(){
  angular.module('FourSquareApp').controller('FourSquareFiltersCtrl',
  ['$scope', 'filterCheckList',
  function($scope, filterCheckList) {
    $scope.sectionType = 'food';
  }]);
};
