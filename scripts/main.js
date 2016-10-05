angular.module('Sample').controller('MainController', ['$scope', '$state', '$timeout', '$mdSidenav', MainController]);

function MainController($scope, $state, $timeout, $mdSidenav) {


    $scope.navigate = function (url) {
        $state.go(url);
    }

}