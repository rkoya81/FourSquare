var FourSquareApp = angular.module('FourSquareApp', ['ngRoute'])

require("./config")();
require('./factories/four-square-service.js')();
require('./controllers/fourSquareCtrl.js')();

