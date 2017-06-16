var FourSquareApp = angular.module('FourSquareApp', ['ngRoute'])

require("./config")();

require('./factories/four-sq-factory')();
require('./factories/four-sq-filters-factory')();
require('./factories/four-sq-details-factory')();
require('./directives/four-sq-drctv')();
require('./directives/four-sq-filters-drctv')();
require('./directives/four-sq-back-drctv.js')();
require('./controllers/four-sq-ctrl')();
require('./controllers/four-sq-filters-ctrl')();
require('./controllers/four-sq-details-ctrl')();
