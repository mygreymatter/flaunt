(function () {
    angular.module('Signup', ['Authenticator'])
        .controller('SignupCtrl', ['$scope', '$rootScope', '$http', '$state', 'AuthFactory',
            function ($scope, $rootScope, $http, $state, AuthFactory) {
                $scope.name = 'Signup';
                $scope.fd = new FormData();
                $scope.errorMessage = '';

                $scope.signup = function (user) {
                    console.log("User: " + user);

                    $http.post('/signup', user).then(function (response) {
                        console.log("SignUp: " + response.status);

                        angular.element('#signup-modal').modal('hide');

                    }, function (err) {
                        console.log("Error");
                        if (err.status === 500)
                            $scope.errorMessage = 'User already exists';
                    });
                };

                $scope.login = function () {
                    $state.go("Login");
                };
	}]);
})();
