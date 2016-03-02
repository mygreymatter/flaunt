(function () {
    angular.module('ChicApp', ['ui.router', 'HomeModule'])
        .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
        function ($stateProvider, $urlRouterProvider, $locationProvider) {
                $stateProvider
                    .state('Home', {
                        url: '/',
                        templateUrl: '../views/home.html',
                        controller: 'HomeController'
                    });

                $locationProvider.html5Mode({
                    enabled: true,
                    requireBase: false
                });
                $urlRouterProvider.otherwise('/')
        }]);

})();
