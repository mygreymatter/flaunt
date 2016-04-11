(function () {
    angular.module('Login', ['Authenticator'])
        .controller('LoginCtrl', ['$scope', '$rootScope', '$http', '$state', 'AuthFactory',
            function ($scope, $rootScope, $http, $state, AuthFactory) {
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

                        angular.element('#login-modal').modal('hide');
                        $rootScope.$emit("HideLoginSignup", {});

                    }, function (err) {
                        console.log("Error");
                        if (err.status === 500)
                            $scope.errorMessage = 'User does not exist';
                    });
                };


	   }]);
})();
