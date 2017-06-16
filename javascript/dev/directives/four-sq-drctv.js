module.exports = function(){
    angular.module('FourSquareApp').directive('places', function() {
		return {
      templateUrl: 'javascript/dev/templates/four-sq-place-temp.html',
			controller: 'FourSquareCtrl'
		}
	});
};
