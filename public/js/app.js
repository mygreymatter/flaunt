(function () {
    angular.module('ChicApp', ['ui.router', 'HomeModule', 'Collections'])
        .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
        function ($stateProvider, $urlRouterProvider, $locationProvider) {
                $stateProvider
                    .state('Home', {
                        url: '/',
                        templateUrl: '../views/home.html',
                        controller: 'HomeController',
                        resolve: {
                            products: function (productsfactory) {
                                return productsfactory.getProducts();
                            }
                        }
                    }).state('Address', {
                        url: '/checkout/address',
                        templateUrl: '../views/address.html',
                        controller: ''
                    }).state('Delivery', {
                        url: '/checkout/delivery',
                        templateUrl: '../views/delivery-method.html',
                        controller: ''
                    }).state('Payment', {
                        url: '/checkout/payment',
                        templateUrl: '../views/payment-method.html',
                        controller: ''
                    }).state('OrderReview', {
                        url: '/checkout/orderreview',
                        templateUrl: '../views/order-review.html',
                        controller: ''
                    }).state('Details', {
                        url: '/details',
                        templateUrl: '../views/details.html',
                        controller: ''
                    }).state('Contact', {
                        url: '/contact',
                        templateUrl: '../views/contact.html',
                        controller: ''
                    }).state('FAQ', {
                        url: '/faq',
                        templateUrl: '../views/faq.html',
                        controller: ''
                    }).state('404', {
                        url: '/404',
                        templateUrl: '../views/404.html',
                        controller: ''
                    }).state('BlogList', {
                        url: '/bloglist',
                        templateUrl: '../views/bloglist.html',
                        controller: ''
                    }).state('BlogPost', {
                        url: '/blogpost',
                        templateUrl: '../views/blogpost.html',
                        controller: ''
                    }).state('Category', {
                        url: '/category',
                        templateUrl: '../views/category.html',
                        controller: ''
                    }).state('OrdersHistory', {
                        url: '/orders-history',
                        templateUrl: '../views/orders-history.html',
                        controller: ''
                    }).state('OrderDetails', {
                        url: '/order-details',
                        templateUrl: '../views/order-detail.html',
                        controller: ''
                    }).state('Wishlist', {
                        url: '/wishlist',
                        templateUrl: '../views/wishlist.html',
                        controller: ''
                    }).state('MyAccount', {
                        url: '/myaccount',
                        templateUrl: '../views/my-account.html',
                        controller: ''
                    }).state('ShoppingCart', {
                        url: '/shopping-cart',
                        templateUrl: '../views/shopping-cart.html',
                        controller: ''
                    });

                $locationProvider.html5Mode({
                    enabled: true,
                    requireBase: false
                });
                $urlRouterProvider.otherwise('/')
        }]);

})();
