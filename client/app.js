angular.module("super_food", ["ngRoute"]).config(
    function($routeProvider) {
        $routeProvider.when('/library', {
            templateUrl: 'client/app/Rita/rita.html',
            controller: 'FoodController'
        });
        $routeProvider.when('/avtoriz', {
            templateUrl: 'client/app/Vika/vika.html',
            controller: 'Foo'
        });
        $routeProvider.when('/menu', {
            templateUrl: 'client/app/Valya/valya.html',
            controller: 'Menu'
        });
        $routeProvider.otherwise({
            redirectTo: '/library'
        });
    });
