var FourSquareApp = angular.module('FourSquareApp', ['ngRoute'])

require("./config")();

require('./factories/four-sq-factory')();
require('./factories/four-sq-filters-factory')();
require('./directives/four-sq-drctv')();
require('./directives/four-sq-filters-drctv')();
require('./controllers/four-sq-ctrl')();
require('./controllers/four-sq-filters-ctrl')();
