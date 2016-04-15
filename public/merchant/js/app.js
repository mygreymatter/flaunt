(function () {
    angular.module('App', ['ui.router', 'Home', 'FloatLabel'])
        .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
            function ($stateProvider, $urlRouterProvider, $locationProvider) {
                $stateProvider
                    .state('Home', {
                        url: '/store',
                        templateUrl: '../views/home.html',
                        controller: 'HomeCtrl'
                    });


                $locationProvider.html5Mode({
                    enabled: true,
                    requireBase: false
                });
                $urlRouterProvider.otherwise('/');
            }]);
})();
