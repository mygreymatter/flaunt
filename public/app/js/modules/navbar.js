(function () {
    angular.module('Navbar', ['Authenticator'])
        .controller('NavbarCtrl', ['$scope', '$rootScope', 'AuthFactory',
            function ($scope, $rootScope, AuthFactory) {
                $scope.hide = false;


                $rootScope.$on("HideLoginSignup", function () {
                    console.log('Hide Login');
                    $scope.toggleLogin(true);
                });

                $scope.toggleLogin = function (hide) {
                    $scope.hide = hide;
                };

                if (AuthFactory.isLoggedIn()) {
                    $scope.toggleLogin(true);
                }

                $scope.logout = function () {
                    AuthFactory.logout();
                    $scope.hide = false;
                };
         }]);
})();
