'use strict';

/**
 * @ngdoc function
 * @name movieDataApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the movieDataApp
 */
angular.module('movieDataApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
