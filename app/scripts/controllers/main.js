'use strict';

/**
 * @ngdoc function
 * @name movieDataApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the movieDataApp
 */
angular.module('movieDataApp')
  .controller('MainCtrl', function ($scope, $http, ngTableParams) {
    $scope.movies = [];

    $scope.diff = function(movie) {
       return movie.douban_rating - movie.imdb_rating;
    };

    $http({
         method: 'GET',
         url:'/data/movies.json'
       }).
       success(function (data) {
         $scope.movies = angular.fromJson(data);
       }).
       error(function (data, status) {
         alert("Something wrong");
       });

  });
