angular.module('Sample').controller('LoginController', ['$scope','$state',LoginController]);

function LoginController($scope,$state) {
    $scope.user = {};
    
    $scope.login = function() {
        console.log($scope.user );
       $state.go("dashboard");
    }

}