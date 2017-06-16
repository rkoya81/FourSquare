module.exports = function(){
  angular.module('FourSquareApp').controller('FourSquareDetailsCtrl',
  ['$scope', 'placeDetails',
  function($scope, placeDetails) {
    $scope.placeInfo = placeDetails.getJSON()

    const mapOptions = {
      zoom: 12
    }

    $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);
    $scope.markers = [];

    const { lat, lng, location, name } = $scope.placeInfo;

    const infoWindow = new google.maps.InfoWindow();
    const createMarker = function() {
      const marker = new google.maps.Marker({
          map: $scope.map,
          position: new google.maps.LatLng(lat, lng),
          title: name
      });
      marker.content = '<div class="info-window">' + location+ '</div>';

      google.maps.event.addListener(marker, 'click', function(){
        infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
        infoWindow.open($scope.map, marker);
      });

      $scope.markers.push(marker);
    }

    createMarker();

    const latLng = $scope.markers[0].getPosition();
    $scope.map.setCenter(latLng);

    $scope.openInfoWindow = function(e, selectedMarker){
      e.preventDefault();
      google.maps.event.trigger(selectedMarker, 'click');
    }
  }]);
};
