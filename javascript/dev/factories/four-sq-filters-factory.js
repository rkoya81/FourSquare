module.exports = function(){
  angular.module('FourSquareApp').factory('filterCheckList', function() {
    let filterCheckList = {
      data: [
        {type: 'food'},
        {type: 'drinks'},
        {type: 'shops'},
        {type: 'arts'},
        {type: 'outdoors'},
        {type: 'sights'},
        {type: 'trending'},
        {type: 'specials'}

      ]
    };
    return filterCheckList;
  });
};
