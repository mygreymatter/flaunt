(function () {
    angular.module('flauntapp', ['ui.router', 'Home', 'Login', 'Signup', 'Navbar'])
        .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
            function ($stateProvider, $urlRouterProvider, $locationProvider) {
                $stateProvider
                    .state('Home', {
                        url: '/',
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
