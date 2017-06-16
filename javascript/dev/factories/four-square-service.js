module.exports = function(){
  angular.module('FourSquareApp').factory('FourSquareAppService', ['$http', function($http) {

    var generalHandler = function(response, processHandler){
      if(response.status === 200 && !jsonResponseIsValid(response.data)){
        console.log("something went wrong with data return");
        return;
      }
      processHandler(response);
    };

    var jsonResponseIsValid = function(theData){
      var isValid = true;
      var json;

      if (typeof(theData) !== 'object') {
        try {
          json = JSON.parse(theData);
        } catch (err) {
          isValid = false;
        }
      }
      return isValid;
    };

    var getServiceParamaters = function(theProcess){
      switch (theProcess) {
        case "getPlaces":
          return {
            'url': 'https://api.foursquare.com/v2/venues/explore',
            'method': 'GET'
          };
      }
    };

    return {
      callFourSquareService: function (process, options, success, error) {
        var serviceParamaters = getServiceParamaters(process);
        return $http({
          url: serviceParamaters.url,
          method: serviceParamaters.method,
          params: options
        })
        .then(
          function(response){ generalHandler(response,success) },
          function(response){ generalHandler(response,error) }
        );
      }
    }
  }]);
};
