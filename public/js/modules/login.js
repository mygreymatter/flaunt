(function () {
    angular.module('Login', [])
        .controller('LoginCtrl', ['$scope', '$http', '$state',
            function ($scope, $http, $state) {
                $scope.name = 'Login';
                $scope.login = function (user) {
                    console.log("Login Pressed! " + user.username);
                    $http.post('/login').then(function (response) {
                        console.log("response: " + response.status);
                    }, function (err) {
                        console.log("Erro");
                    });
                };


	   }]);
})();
