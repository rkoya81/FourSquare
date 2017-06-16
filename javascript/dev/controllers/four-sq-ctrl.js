module.exports = function(){
  angular.module('FourSquareApp').controller('FourSquareCtrl',
  ['$scope', '$location', 'FourSquareAppService', 'filterCheckList', 'placeDetails',
  function($scope, $location, FourSquareAppService, filterCheckList, placeDetails) {
    $scope.results = 'ResultsFound';
    $scope.loader = 'Loaded';
    $scope.showFilters = false;

    $scope.locationString = '';
    $scope.shared = filterCheckList;

    $scope.showFilterOptions = function() {
      if($scope.showFilters) {
        $scope.showFilters = false;
      } else {
        $scope.showFilters = true;
      }
    }

    $scope.serviceCall = function() {
      $scope.places = '';
      $scope.loader = 'Loading';
      const options = {
        client_id: '30GZZNZPS1SU1Z5PWSSGTR5KCZAQJRWSIZEDDSVT0DYSDSNN',
        client_secret: 'WUJRMM100H5E2Q12TMDQSYKMMZH4TLGB5FYAQZLO5QWK2FJQ',
        v: '20170612',
        near: $scope.locationString,
        venuePhotos: 1,
        section: $scope.sectionType
      };

      FourSquareAppService.callFourSquareService('getPlaces', options, $scope.getPlacesSuccess, $scope.getPlacesError);
    }

    $scope.getPlacesSuccess = function(response) {

      if (typeof(Storage) !== "undefined") {
        sessionStorage.setItem("places", JSON.stringify(response));
      }

      if(response.data && response.data.response.totalResults > 0) {
        $scope.loader = 'Loaded';
        const { items } = response.data.response.groups[0];
        let places = [];

        for (let item of items) {
          places.push($scope.parseData(item))
        }

        $scope.places = places;

      } else {
        $scope.loader = 'Loaded';
        $scope.results = 'noResultsFound';
      }
    };

    function displayStoredResults() {
      if (sessionStorage.getItem("places") !== null) {
        $scope.getPlacesSuccess(JSON.parse(sessionStorage.getItem('places')));
      }
    }

    $scope.getPlacesError = function() {
      console.log('Something went wrong');
      $scope.loader = 'Loaded';
    };

    $scope.search = function() {
      $scope.serviceCall();
    }

    $scope.parseData = function(data) {
      const { name, location, rating, photos, categories, price, ratingSignals } = data.venue;
      let priceSymbol = '£';

      if (price) {
        let value = price.tier;
        while (value > 1) {
          priceSymbol += '£';
          value--;
        }
      } else {
        priceSymbol = '';
      }

      const dataValues = {
        name,
        location: location.formattedAddress[0] + ', ' + location.formattedAddress[1],
        rating,
        photos: (photos.groups[0]) ? photos.groups[0].items[0].prefix + '128x128' + photos.groups[0].items[0].suffix : '',
        locationType: categories[0].name,
        priceSymbol,
        ratingSignals,
        lat: location.lat,
        lng: location.lng
      }

      return dataValues;
    }

    $scope.viewDetails = function() {
      $location.url('details');
      placeDetails.setJSON(this.place);
    }
    
    displayStoredResults();
  }]);
};
