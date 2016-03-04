(function () {
    angular.module('HomeModule', [])
        .controller('HomeController', function ($scope, $interval) {

            var a = angular.element(document.getElementById('a')),
                b = angular.element(document.getElementById('b')),
                c = angular.element(document.getElementById('c')),
                d = angular.element(document.getElementById('d')),
                src = "../images/";

            $scope.slide_image = src + "rose_smells_rose" + ".jpg";
            console.log('Slide Image: ' + $scope.slide_image);

            $scope.name = 'Collections';
            $scope.rows = [{
                'images': [1, 2, 3, 4]
            }, {
                'images': [1, 2, 3, 4]
            }];
            $scope.img_name = "saree_1";
            $scope.store = "store_2";

        });
})();
