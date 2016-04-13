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

                $scope.products = [
                    [{
                        "image": "screen-shop1",
                        "name": "Dress Less",
                        "price": 1400
                }, {
                        "image": "screen-shop2",
                        "name": "Jeans Dress",
                        "price": 1650
                }, {
                        "image": "screen-shop3",
                        "name": "Little Red",
                        "price": 1100
                }, {
                        "image": "screen-shop4",
                        "name": "Bird Song",
                        "price": 2500
                }],
                    [{
                        "image": "screen-shop5",
                        "name": "Spring",
                        "price": 1500
                        }, {
                        "image": "screen-shop6",
                        "name": "Maya Dress",
                        "price": 1400
                }, {
                        "image": "screen-shop7",
                        "name": "Water Dream",
                        "price": 1800
                }, {
                        "image": "screen-shop8",
                        "name": "Branding Bug",
                        "price": 1150
                }]
                ];

                $scope.bags = [
                    [{
                        "image": "screen-bag1",
                        "name": "Dress Less",
                        "price": 1400
                }, {
                        "image": "screen-bag2",
                        "name": "Jeans Dress",
                        "price": 1650
                }, {
                        "image": "screen-bag3",
                        "name": "Little Red",
                        "price": 1100
                }, {
                        "image": "screen-bag4",
                        "name": "Bird Song",
                        "price": 2500
                }],
                    [{
                        "image": "screen-bag5",
                        "name": "Spring",
                        "price": 1500
                        }, {
                        "image": "screen-bag6",
                        "name": "Maya Dress",
                        "price": 1400
                }, {
                        "image": "screen-bag7",
                        "name": "Water Dream",
                        "price": 1800
                }, {
                        "image": "screen-bag8",
                        "name": "Branding Bug",
                        "price": 1150
                }]
                ];


	   }]);
})();
