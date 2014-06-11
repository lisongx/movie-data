'use strict';

/**
 * @ngdoc function
 * @name movieDataApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the movieDataApp
 */
angular.module('movieDataApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
