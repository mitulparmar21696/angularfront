'use strict';

/**
 * @ngdoc function
 * @name frontEndApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontEndApp
 */
angular.module('frontEndApp')
  .controller('MainCtrl', function ($scope,$location,$http) {
    //=========================================
    //Variable Initialization
    //=========================================
    $scope.detailsArray=[];
    //=========================================
    //Function Intialization
    //=========================================
    $scope.init=init;
    $scope.modifyRedirect=modifyRedirect;
    $scope.getDetails=getDetails;
    //=========================================
    //Function Implementation
    //=========================================
    //init function
    function init(){
      getDetails()
    }
    //redirect to modify
    function modifyRedirect(){
      $location.path("/modify");
    }
    //get all details
    function getDetails(){
      debugger
      $http.get('http://localhost:9001/api/things/')
      .then(function (response) {
          debugger
          if (response.status === 200) {
            $scope.detailsArray=response.data;
              $location.path('/')
              
          } else {
              $scope.incorrect = true;
          }
      });
    }
  });
