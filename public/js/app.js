(function () {
    angular.module('flauntapp', ['ui.router', 'Home', 'Login', 'Signup'])
        .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
            function ($stateProvider, $urlRouterProvider, $locationProvider) {
                $stateProvider
                    .state('Home', {
                        url: '/',
                        templateUrl: '../views/home.html',
                        controller: 'HomeCtrl'
                    }).state('Home.Login', {
                        url: 'login',
                        templateUrl: '../views/login.html',
                        controller: 'LoginCtrl'
                    }).state('Home.Signup', {
                        url: 'signup',
                        templateUrl: '../views/signup.html',
                        controller: 'SignupCtrl'
                    });

                $locationProvider.html5Mode({
                    enabled: true,
                    requireBase: false
                });
                $urlRouterProvider.otherwise('/');
            }]);
})();
