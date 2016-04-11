(function () {
    angular.module('Login', ['Authenticator'])
        .controller('LoginCtrl', ['$scope', '$http', '$state', 'AuthFactory',
            function ($scope, $http, $state, AuthFactory) {
                $scope.name = 'Login';
                $scope.errorMessage = '';

                $scope.signup = function () {
                    $state.go('Signup');
                };

                $scope.login = function (user) {
                    $scope.errorMessage = '';

                    console.log("Login Pressed! " + user.username);
                    $http.post('/login', user).then(function (response) {
                        console.log("response: " + response.status);
                        AuthFactory.saveToken(response.data.token);
                        $state.go('Home');
                    }, function (err) {
                        console.log("Error");

                        if (err.status === 500)
                            $scope.errorMessage = 'User does not exist';
                    });
                };


	   }]);
})();
