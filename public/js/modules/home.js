(function () {
    angular.module('Home', ['Authenticator'])
        .controller('HomeCtrl', ['$scope', '$http', '$state', 'AuthFactory',
            function ($scope, $http, $state, AuthFactory) {

                $scope.toBeShown = $state.is('Home');
                $scope.isLoggedIn = AuthFactory.isLoggedIn;
                $scope.login = function () {
                    $state.go("Login");
                };

                $scope.signup = function () {
                    $state.go("Signup");
                };

                $scope.logout = function () {
                    AuthFactory.logout();
                    $scope.isLoggedIn = false;
                };

	   }]);
})();
