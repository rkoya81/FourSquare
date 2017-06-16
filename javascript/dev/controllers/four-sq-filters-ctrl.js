module.exports = function(){
  angular.module('FourSquareApp').controller('FourSquareFiltersCtrl',
  ['$scope', 'filterCheckList',
  function($scope, filterCheckList) {
    let types = [];

    $scope.updateTypes = function(type) {
      for (let value of filterCheckList.data) {
        let position = types.indexOf(value.type);
        if(value.isChecked) {
          if(position === -1) {
            types.push(value.type);
          }
        } else {
          if(position > -1){
            types.splice(position,1);
          }
        }
      }

      filterCheckList.checkedValues = types;
    }
  }]);
};
