module.exports = function(){
  angular.module('FourSquareApp').factory('FourSquareAppService', ['$http', function($http) {

    const generalHandler = function(response, processHandler){
      if(response.status === 200 && !jsonResponseIsValid(response.data)){
        console.log("something went wrong with data return");
        return;
      }
      processHandler(response);
    };

    const jsonResponseIsValid = function(theData){
      let isValid = true;
      let json;

      if (typeof(theData) !== 'object') {
        try {
          json = JSON.parse(theData);
        } catch (err) {
          isValid = false;
        }
      }
      return isValid;
    };

    const getServiceParameters = function(theProcess){
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
        const serviceParameters = getServiceParameters(process);
        return $http({
          url: serviceParameters.url,
          method: serviceParameters.method,
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
