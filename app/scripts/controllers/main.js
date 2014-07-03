'use strict';

/**
 * @ngdoc function
 * @name movieDataApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the movieDataApp
 */
angular.module('movieDataApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.movies = [];

    $http({
         method: 'GET',
         url:'/data/movies.json'
       }).
       success(function (data) {
         var movies = angular.fromJson(data);

         $scope.yearDistributionData = _.chain(movies)
           .map(function(movie) {
             movie.x = movie['diff'];
             movie.y = movie['movie_year'];
             return movie;
           })
           .groupBy(function(movie) {
             var type;
             if(movie.diff > 0) {
               type = "douban>IMDb";
             } else if(movie.diff === 0) {
               type = "douban=IMDb";
             } else {
               type = "douban<IMDb";
             }
             return type;
           })
           .map(function(group, key) {
             return {
               "key": key,
               "values": group
             }
           })
           .value();

           nv.addGraph(function() {
             var chart = nv.models.scatterChart()
                           .color(d3.scale.category10().range());

             chart.xAxis.tickFormat(d3.format('.01f'));
             chart.yAxis.tickFormat(d3.format('.01f'));

             chart.tooltipContent(function(key, diff, year, obj) {
               var movie = obj.point;
               return '<h4>' + movie.title_year + '</h4>';
             });

             d3.select('#year-distribution-chart svg')
                 .datum($scope.yearDistributionData)
                 .transition()
                 .duration(500)
                 .call(chart);

             nv.utils.windowResize(chart.update);
             return chart;
           });

         $scope.movies = movies;
         

       }).
       error(function (data, status) {
         alert("Something wrong");
       });

  });
