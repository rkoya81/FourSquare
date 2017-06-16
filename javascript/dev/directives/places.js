module.exports = function(){
    angular.module('FourSquareApp').directive('places', function() {
		return {
      		templateUrl: 'javascript/dev/templates/place.html',
			controller: 'FourSquareCtrl'

		}
	});
};
