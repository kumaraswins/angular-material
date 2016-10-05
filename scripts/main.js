angular.module('Sample').controller('MainController', ['$scope','$state',MainController]);

function MainController($scope, $state) {
    
    $scope.navigate = function(url){
         $state.go(url);
    }

}