(function () {
    angular.module('flauntapp', ['ui.router', 'Home', 'Login', 'Signup', 'Authenticator'])
        .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
            function ($stateProvider, $urlRouterProvider, $locationProvider) {
                $stateProvider
                    .state('Home', {
                        url: '/',
                        templateUrl: '../views/home.html',
                        controller: 'HomeCtrl'
                    }).state('Login', {
                        url: '/login',
                        templateUrl: '../views/login.html',
                        controller: 'LoginCtrl'
                    }).state('Signup', {
                        url: '/signup',
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
