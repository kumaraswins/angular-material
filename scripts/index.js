angular
    .module('Sample', ['ngAnimate', 'ngMaterial', 'ui.router'])
    .config(function ($mdThemingProvider, $stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/login");
        $stateProvider
            .state('login', {
                url: '/login'
                , views: {
                    content: {
                        templateUrl: 'views/login.html'
                    }
                }
            })
            .state('dashboard', {
                url: '/dashboard'
                , views: {
                    /*nav: {
                        templateUrl: 'navbar.html'
                    },*/
                    content: {
                        templateUrl: 'views/dashboard.html'
                    }
                }
            })
        $mdThemingProvider.theme('blue')
         $mdThemingProvider.theme('docs-dark', 'default')
          .primaryPalette('yellow')
          .dark();

    });