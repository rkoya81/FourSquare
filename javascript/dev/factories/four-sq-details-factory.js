module.exports = function(){
  angular.module('FourSquareApp').factory('placeDetails', function() {
    let placeJSON = null;
    return {
      getJSON: function() {
        return placeJSON;
      },
      setJSON: function(value) {
        placeJSON = value;
      }
    }
  });
};
