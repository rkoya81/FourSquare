module.exports = function(){
  angular.module('FourSquareApp').factory('filterCheckList', function() {
    let filterCheckList = {
      data: [
        {type: 'food', isChecked: false},
        {type: 'drinks', isChecked: false},
        {type: 'coffee', isChecked: false}
      ],
      checkedValues: []
    };
    return filterCheckList;
  });
};
