(function () {
    angular.module('Products', [])
        .factory('productsfactory', ['$http', function ($http) {
            var o = {
                products: []
            };

            o.getProducts = function () {
                return $http.get('/data.json').then(function (response) {
                    console.log(response.data);
                    return angular.copy(response.data, o.products);
                }, function (error) {
                    console.log('GetProducts Failed: ' + error);
                    return [];
                });
            };
            return o;
        }])
})();
