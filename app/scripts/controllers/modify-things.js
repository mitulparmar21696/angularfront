'use strict';

/**
 * @ngdoc function
 * @name frontEndApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontEndApp
 */
angular.module('frontEndApp')
  .controller('ModifyThingsCtrl', function ($scope,$location,$http) {
    //=========================================
    //Variable Initialization
    //=========================================
    $scope.details={}
    //=========================================
    //Function Intialization
    //=========================================
    $scope.modifyRedirect=modifyRedirect;
    $scope.saveDetails=saveDetails;
    //=========================================
    //Function Implementation
    //=========================================
    //Redirect to Home Page
    function modifyRedirect(){
        $location.path("/");
    }
    // Save Details
    function saveDetails(){
      $http.post('http://localhost:9001/api/things/create', $scope.details)
      .then(function (response) {
          debugger
          if (response.status === 200) {
              $location.path('/')
              
          } else {
              $scope.incorrect = true;
          }
      });
    }
  });
