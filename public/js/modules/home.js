(function () {
    angular.module('Home', [])
        .controller('HomeCtrl', ['$scope', '$http', '$state',
            function ($scope, $http, $state) {

                $scope.toBeShown = $state.is('Home');
                $scope.login = function () {
                    $state.go("Home.Login");
                    $scope.toBeShown = false;
                };

                $scope.signup = function () {
                    $state.go("Home.Signup");
                    $scope.toBeShown = false;
                };

	   }]);
})();
