(function () {
    angular.module('Signup', ['Authenticator'])
        .controller('SignupCtrl', ['$scope', '$http', '$state', 'AuthFactory',

            function ($scope, $http, $state, AuthFactory) {
                $scope.name = 'Signup';
                $scope.fd = new FormData();
                $scope.errorMessage = '';

                $scope.signup = function (user) {
                    console.log("User: " + user);

                    $http.post('/signup', user).then(function (response) {
                        console.log("SignUp: " + response.status);
                        AuthFactory.saveToken(response.data.token);
                        $state.go('Home');
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
