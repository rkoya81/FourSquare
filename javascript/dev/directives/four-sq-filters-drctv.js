module.exports = function(){
    angular.module('FourSquareApp').directive('filters', function() {
		return {
      templateUrl: 'javascript/dev/templates/four-sq-filters.html',
			controller: 'FourSquareFiltersCtrl'
		}
	});
};
