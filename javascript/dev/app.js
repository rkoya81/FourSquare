var FourSquareApp = angular.module('FourSquareApp', ['ngRoute'])

require("./config")();
require('./factories/four-square-service.js')();
require('./directives/places')();
require('./controllers/fourSquareCtrl.js')();

