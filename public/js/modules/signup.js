(function () {
    angular.module('Signup', [])
        .controller('SignupCtrl', ['$scope', '$http', '$state',
            function ($scope, $http, $state) {
                $scope.name = 'Signup';
                $scope.signup = function (user) {
                    console.log("signgup presed: " + user.username);
                    $http.post('/usignup');
                };

                $scope.login = function () {
                    $state.go("Login");
                };
	}]);
})();
