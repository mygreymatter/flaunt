(function () {
    angular.module('HomeModule', ['Products'])
        .controller('HomeController', ['$scope', '$state', '$interval', 'products',
                                       function ($scope, $state, $interval, products) {
                console.log('Products: ' + products[0].image);

                $scope.products = products;

                var a = angular.element(document.getElementById('a')),
                    b = angular.element(document.getElementById('b')),
                    c = angular.element(document.getElementById('c')),
                    d = angular.element(document.getElementById('d')),
                    src = "../images/screens/";

                $scope.slide_image = src + "rose_smells_rose" + ".jpg";
                $scope.widthClass = screen.width < 400 ? "col-xs-12 col-sm-6 col-md-3 item" :
                    "col-xs-6 col-sm-6 col-md-3 item";

                $scope.stores = [{
                    'image': 'store_2',
                    'name': 'Paisley'
	               }, {
                    'image': 'store_2',
                    'name': 'Aishwarya Design Studio'
	               }, {
                    'image': 'store_2',
                    'name': 'Studio Rudraksh'
	               }, {
                    'image': 'store_2',
                    'name': 'Vajra'
	               }, {
                    'image': 'store_2',
                    'name': 'Studio Upasana'
	               }, {
                    'image': 'store_2',
                    'name': 'Smriti\'s'
	               }, {
                    'image': 'store_2',
                    'name': 'Obsession'
	               }, {
                    'image': 'store_2',
                    'name': 'Banwery'
	               }];

                $scope.showProduct = function () {
                    console.log('Show Product');
                    $state.go('Details');
                };

                        }]);
})();
