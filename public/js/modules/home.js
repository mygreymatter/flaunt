(function () {
    angular.module('HomeModule', [])
        .controller('HomeController', function ($scope, $interval) {

            console.log('Home Width: ' + screen.width);
            var a = angular.element(document.getElementById('a')),
                b = angular.element(document.getElementById('b')),
                c = angular.element(document.getElementById('c')),
                d = angular.element(document.getElementById('d')),
                src = "../images/screens/";

            $scope.slide_image = src + "rose_smells_rose" + ".jpg";
            $scope.widthClass = screen.width < 400 ? "col-xs-12 col-sm-6 col-md-3 item" :
                "col-xs-6 col-sm-6 col-md-3 item";
            $scope.name = 'Collections';

            $scope.collections = [{
                'image': 'screen-shop1',
                'name': 'Dress Less',
                'price': 1400
                }, {
                'image': 'screen-shop2',
                'name': 'Jeans Dress',
                'price': 1650
                }, {
                'image': 'screen-shop3',
                'name': 'Little Red',
                'price': 1100
                }, {
                'image': 'screen-shop4',
                'name': 'Bird Song',
                'price': 2500
                }, {
                'image': 'screen-shop5',
                'name': 'Spring',
                'price': 1500
                }, {
                'image': 'screen-shop6',
                'name': 'Maya Dress',
                'price': 1400
                }, {
                'image': 'screen-shop7',
                'name': 'Water Dream',
                'price': 1800
                }, {
                'image': 'screen-shop8',
                'name': 'Branding Bug',
                'price': 1150
                }];



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

        });
})();
